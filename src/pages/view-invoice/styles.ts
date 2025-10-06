import styled from "@emotion/styled";
import colors from "../../styles/color";

export const BackButton = styled.button`
  border: none;
  color: ${colors.primary08};
  font-size: 15px;
  line-height: 15px;
  letter-spacing: -0.25px;
  display: flex;
  gap: 20px;
  font-weight: bold;
  align-items: center;
  background-color: #f8f8f8;
`;
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InnerContent = styled.div`
  width: 730px;
  max-width: 900px;
  margin: 0px auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StatusContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatusLeftContainer = styled.div`
  display: flex;
  gap: 30px;
`;
