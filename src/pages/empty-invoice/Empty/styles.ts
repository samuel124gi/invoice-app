import styled from "@emotion/styled";
import colors from "../../../styles/color";

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
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CenteredContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

export const CenteredContainerHeader = styled.p`
  font-size: 24px;
  letter-spacing: 0.75px;
  color: ${colors.primary08};
  font-weight: bold;
`;

export const CenteredContainerSubtitle = styled.p`
  font-size: 13px;
  color: ${colors.primary06};
  letter-spacing: -0.1px;
  line-height: 15px;
`;

export const CenteredContainerSpan = styled.span`
  font-size: 13px;
  color: ${colors.primary06};
  letter-spacing: -0.1px;
  line-height: 15px;
  font-weight: bold;
`;
