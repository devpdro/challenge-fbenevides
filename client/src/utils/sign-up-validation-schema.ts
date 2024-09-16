import * as yup from "yup";

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .matches(/@/, 'Email deve conter "@"')
    .required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});
