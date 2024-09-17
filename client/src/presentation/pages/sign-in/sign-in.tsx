import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Grid } from "@mantine/core";

import { Button } from "src/presentation/components";
import { signInValidationSchema } from "src/utils";
import { authState } from "src/infra/store/auth";
import { BASE_URL_API } from "src/constants";

import * as S from "./sign-in-styles";

type SignInFormSchema = yup.InferType<typeof signInValidationSchema>;

const SignIn = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [, setAuthenticationState] = useAtom(authState);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormSchema>({
    resolver: yupResolver(signInValidationSchema),
  });

  const onSubmit: SubmitHandler<SignInFormSchema> = async (data) => {
    try {
      const response = await fetch(`${BASE_URL_API}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      const { token } = await response.json();
      setAuthenticationState({ token: token });

      if (!response.ok) {
        throw new Error("Erro ao fazer login. Por favor, tente novamente...");
      }

      navigate("/welcome");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Erro no servidor. Tente novamente mais tarde...");
      }
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Iniciar sessão na sua conta</S.Title>
        <S.Subtitle>
          Comece a utilizar a nossa aplicação, basta entrar na sua conta e
          desfrutar da experiência.
        </S.Subtitle>
        <Grid>
          <Grid.Col span={{ md: 12, lg: 12 }}>
            <S.Input {...register("email")} type="email" placeholder="Email" />
            {errors.email && <S.Error>{errors.email.message}</S.Error>}
          </Grid.Col>
          <Grid.Col span={{ md: 12, lg: 12 }}>
            <S.Input
              {...register("password")}
              type="password"
              placeholder="Senha"
            />
            {errors.password && <S.Error>{errors.password.message}</S.Error>}
          </Grid.Col>
        </Grid>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "ENTRANDO..." : "ENTRAR"}
        </Button>

        <S.Signup>
          Não tem conta? <a href="/registrar">Criar conta</a>
        </S.Signup>

        {errorMessage && <S.Error>{errorMessage}</S.Error>}
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
