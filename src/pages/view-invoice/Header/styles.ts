import styled from "@emotion/styled";
import colors from "../../../styles/color";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 8px;
`;

export const LeftContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const StatusText = styled.p`
  font-size: 13px;
  color: #858bb2;
  line-height: 15px;
  letter-spacing: -0.1px;
`;
