import styled from "@emotion/styled";
// import colors from "../../styles/color";
import { ButtonVariant } from "../../types/component";
import colors from "../../styles/color";

export const StyledButton = styled.button<{
  variant: ButtonVariant;
}>`
  width: fit-content;
  height: 48px;
  border: 1px solid transparent;
  padding: 8px 20px;
  letter-spacing: -0.25px;
  font-size: 13px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 15px;
  font-weight: bold;
  border-radius: 24px;
  ${({ variant }) =>
    variant === "primary" &&
    `
background-color: ${colors.primary01};
  `}

  ${({ variant }) =>
    variant === "secondary" &&
    `
  `}
`;
