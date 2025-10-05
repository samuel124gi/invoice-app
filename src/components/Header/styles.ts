import styled from "@emotion/styled";
import colors from "../../styles/color";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const LeftContainer = styled.div``;
export const RightContainer = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h1`
  color: ${colors.primary08};
`;
export const SubTitle = styled.p`
  color: ${colors.primary06};
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
`;
