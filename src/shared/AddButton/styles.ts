import styled from "@emotion/styled";
import colors from "../../styles/color";

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

export const Text = styled.p``;

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
