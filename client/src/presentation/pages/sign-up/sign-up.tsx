import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Grid } from "@mantine/core";

import { Button } from "src/presentation/components";
import { BASE_URL_API } from "src/constants";
import { signUpValidationSchema } from "src/utils";

import * as S from "./sign-up-styles";

type SignUpFormSchema = yup.InferType<typeof signUpValidationSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormSchema>({
    resolver: yupResolver(signUpValidationSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormSchema> = async (data) => {
    const { email, password } = data;

    try {
      const response = await fetch(`${BASE_URL_API}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(
          responseData.message ||
            "Erro ao criar conta. Por favor, tente novamente..."
        );
      }

      navigate("/");
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
        <S.Title>Criar conta</S.Title>
        <S.Subtitle>
          Comece a utilizar a nossa aplicação, basta criar uma conta e desfrutar
          da experiência.
        </S.Subtitle>
        <Grid>
          <Grid.Col span={{ md: 12, lg: 12 }}>
            <S.Input {...register("name")} placeholder="Nome completo" />
            {errors.name && <S.Error>{errors.name.message}</S.Error>}
          </Grid.Col>
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
          <Grid.Col span={{ md: 12, lg: 12 }}>
            <S.Input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirmar senha"
            />
            {errors.confirmPassword && (
              <S.Error>{errors.confirmPassword.message}</S.Error>
            )}
          </Grid.Col>
        </Grid>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "CRIANDO CONTA..." : "CRIAR"}
        </Button>

        <S.Signup>
          Já tem uma conta? <a href="/">Entrar</a>
        </S.Signup>

        {errorMessage && <S.Error>{errorMessage}</S.Error>}
      </S.Form>
    </S.Container>
  );
};

export default SignUp;
