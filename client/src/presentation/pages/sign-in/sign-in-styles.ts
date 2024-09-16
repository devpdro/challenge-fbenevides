import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.silver};
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
`;
export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;
  position: relative;

  max-width: 450px;
  padding: 28px;
  gap: 10px;
  border-radius: 20px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  color: ${({ theme }) => theme.colors.info};
  font-weight: ${({ theme }) => theme.fontWeights.default};

  letter-spacing: -1px;
  line-height: 2.075rem;
`;
export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.default};
  color: ${({ theme }) => theme.colors.info};
  word-wrap: break-word;

  line-height: 1.375rem;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.default};
  border-bottom: 1px solid ${({ theme }) => theme.colors.info};

  width: 100%;
  margin: 10px 0;
  padding: 10px;
  letter-spacing: -1px;
  border-radius: 2px;
`;
export const Signup = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.default};
  color: ${({ theme }) => theme.colors.info};
  text-align: center;

  margin-top: 2px;
  line-height: 1.375rem;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }
`;

export const Error = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.default};
    color: ${theme.colors.error};
    text-align: center;

    margin-left: 5px;
    width: 100%;
  `}
`;
