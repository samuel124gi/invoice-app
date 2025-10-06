import styled from "@emotion/styled";
import { InputVariant } from "../../types/component";
import colors from "../../styles/color";

export const StyledInput = styled.input<{
  type: InputVariant;
}>`
  border: 1px solid ${colors.secondary03};
  border-radius: 4px;
  padding: 10px;
  ${({ type }) =>
    type === "text" &&
    `
    width: 100%;
    color: ${colors.secondary06};
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
  letter-spacing: -0.25px;
  
  `}
`;
