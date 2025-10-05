import styled from "@emotion/styled";
// import colors from "../../styles/color";
import { ButtonVariant } from "../../types/component";

export const StyledButton = styled.button<{
  variant: ButtonVariant;
}>`
  display: flex;
  gap: 10px;
  border-radius: 8px;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: none;
  width: 104px;
  height: 40px;
  ${({ variant }) =>
    variant === "primary" &&
    `
  background: rgba(51, 214, 159, 0.05);
  color: #33d69f;
 
  `}

  ${({ variant }) =>
    variant === "secondary" &&
    `
    background: rgba(255, 143, 0, 0.05);
  color: #ff8f00;
  `}
   ${({ variant }) =>
    variant === "tertiary" &&
    `
    background-color: rgba(55, 59, 83, 0.05);
  color: #373b53;
  `}
`;
