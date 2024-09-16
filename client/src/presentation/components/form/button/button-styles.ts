import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ButtonProps } from "./button";

const variants = {
  primary: css`
    padding: 0.6rem 1.4rem;
    margin-left: 0.15rem;

    &:hover {
      background-color: rgb(56, 90, 194);
    }
  `,
};

export const Container = styled.button<ButtonProps>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  transition: ${({ theme }) => theme.transition.default};
  background-color: ${({ theme }) => theme.colors.buttonColor};
  font-weight: ${({ theme }) => theme.fontWeights.default};
  color: ${({ theme }) => theme.colors.snow};
  font-size: ${({ theme }) => theme.fontSizes.default};
  justify-content: center;
  cursor: pointer;

  border-radius: 10px;

  ${({ variant }) => variant && variants[variant]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
