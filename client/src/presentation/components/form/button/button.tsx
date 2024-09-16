import { type ButtonHTMLAttributes, type ReactNode } from "react";

import * as S from "./button-styles";

export type ButtonVariants = "primary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  isVisible?: boolean;
  children: ReactNode;
}

const Button = ({
  type = "button",
  variant = "primary",
  isVisible = true,
  children,
  ...rest
}: ButtonProps) => (
  <S.Container type={type} variant={variant} isVisible={isVisible} {...rest}>
    {children}
  </S.Container>
);

export default Button;
