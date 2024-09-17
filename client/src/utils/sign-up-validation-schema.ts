import * as yup from "yup";

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .matches(/@/, 'Email deve conter "@"')
    .required("Email é obrigatório"),
  password: yup
    .string()
    .min(4, "Senha deve ter pelo menos 4 caracteres")
    .required("Senha é obrigatória"),
});
