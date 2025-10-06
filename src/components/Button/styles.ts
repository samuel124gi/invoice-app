import styled from "@emotion/styled";
import { ButtonVariant } from "../../types/component";
import colors from "../../styles/color";

export const StyledButton = styled.button<{
  variant: ButtonVariant;
}>`
  border: none;
  border-radius: 24px;
  font-size: 15px;
  font-weight: bold;

  ${({ variant }) =>
    variant === "primary" &&
    `
  background: ${colors.primary01};
    color: ${colors.white};
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  display: flex;
  padding: 10px 15px;
    &:hover{
    background-color: ${colors.primary02}
    }
  `};

  ${({ variant }) =>
    variant === "secondary" &&
    `
      color: ${colors.white};
   background: ${colors.primary01};
   padding: 10px 18px;
  &:hover{
    background-color: ${colors.primary02}
    }
  `}
  ${({ variant }) =>
    variant === "tertiary" &&
    `
  background: #F9FAFE;
  color: ${colors.primary07};
    text-align:center;
    padding: 10px 18px;
    &:hover{
    background-color: #DFE3FA;
    }
  `}

  ${({ variant }) =>
    variant === "delete" &&
    `
    color: ${colors.white};
  padding: 10px 18px;
  background-color:${colors.primary09};
  `}
`;
