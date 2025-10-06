import styled from "@emotion/styled";
import colors from "../../styles/color";

export const Heading = styled.h1`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  letter-spacing: -0.5px;
  color: ${colors.primary08};
`;

export const Header = styled.div`
  display: flex;
`;

export const HeaderSpan = styled.span`
  color: ${colors.primary06};
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  letter-spacing: -0.5px;
`;

export const InnerContainer = styled.div`
  background-color: ${colors.white};
  width: 500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
