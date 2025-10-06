import styled from "@emotion/styled";
import colors from "../../../styles/color";

export const MainContainer = styled.div`
  background-color: ${colors.white};
  padding: 30px;
  width: fit-content;
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
`;

export const Heading = styled.h1`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  font-weight: bold;
  color: ${colors.secondary06};
`;

export const Text = styled.p`
  color: ${colors.secondary04};
  line-height: 22px;
  font-size: 13px;
  letter-spacing: -0.1px;
  font-weight: 500;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: right;
`;
