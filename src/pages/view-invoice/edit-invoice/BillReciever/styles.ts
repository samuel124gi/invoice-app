import styled from "@emotion/styled";
import colors from "../../../../styles/color";

export const Title = styled.p`
  color: ${colors.primary01};
  line-height: 15px;
  font-size: 15px;
  letter-spacing: -0.25px;
  font-weight: bold;
`;
export const First = styled.div``;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Label = styled.label`
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  font-weight: 500;
  color: ${colors.secondary05};
`;

export const Second = styled.div`
  display: flex;
  gap: 20px;
`;
