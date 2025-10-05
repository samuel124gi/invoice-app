import styled from "@emotion/styled";
import { StatusVariant } from "../../types/component";

export const StyledStatus = styled.div<{
  type: StatusVariant;
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
  ${({ type }) =>
    type === "paid" &&
    `
  background: rgba(51, 214, 159, 0.05);
  color: #33d69f;
 
  `}

  ${({ type }) =>
    type === "pending" &&
    `
    background: rgba(255, 143, 0, 0.05);
  color: #ff8f00;
  `}
   ${({ type }) =>
    type === "draft" &&
    `
    background-color: rgba(55, 59, 83, 0.05);
  color: #373b53;
  `}
`;

export const StatusIndicator = styled.div<{
  type: StatusVariant;
}>`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  ${({ type }) =>
    type === "paid" &&
    `
  
  background-color: #33d69f;
  `}
  ${({ type }) =>
    type === "pending" &&
    `
  
 background-color: #ff8f00;
  `}
${({ type }) =>
    type === "draft" &&
    `
  
  background-color: #373b53;
  `}
`;
