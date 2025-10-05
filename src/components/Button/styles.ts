import styled from "@emotion/styled";
import { ButtonVariant } from "../../types/component";
import colors from "../../styles/color";

export const StyledButton = styled.button<{
  variant: ButtonVariant;
}>`
  align-items: center;
  border-radius: 30px;
  display: flex;
  border: none;
  width: fit-content;
  color: ${colors.white};
  padding: 10px 18px 10px 10px;
  font-size: 20px;
  justify-content: space-between;
  gap: 20px;

  ${({ variant }) =>
    variant === "primary" &&
    `
    background: ${colors.primary01};
    
  `};
`;

export const AddButton = styled.button`
  color: ${colors.primary01};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${colors.white};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
