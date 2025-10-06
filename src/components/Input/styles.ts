import styled from "@emotion/styled";
import { InputVariant } from "../../types/component";
import colors from "../../styles/color";

export const StyledInput = styled.input<{
  type: InputVariant;
}>`
  background-color: ${colors.white};
  border: 1px solid ${colors.primary05};
  border-radius: 4px;
  padding: 10px;
  ${({ type }) =>
    type === "text" &&
    `
    width: 100%;

  
  `}
  ${({ type }) =>
    type === "long" &&
    `
    width: 100%;

    
  
  `}
`;
