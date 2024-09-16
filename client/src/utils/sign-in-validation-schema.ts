import * as yup from "yup";

export const signUpValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(8, "Nome completo deve ter pelo menos 8 caracteres")
    .required("Nome completo é obrigatório"),

  email: yup
    .string()
    .email("Email inválido")
    .matches(/@/, 'Email deve conter "@"')
    .required("Email é obrigatório"),

  password: yup
    .string()
    .min(4, "Senha deve ter pelo menos 4 caracteres")
    .required("Senha é obrigatória"),

  confirmPassword: yup
    .string()
    .required("Confirmar senha é obrigatório")
    .test("passwords-match", "Senhas devem corresponder", function (value) {
      return this.parent.password === value;
    }),
});
