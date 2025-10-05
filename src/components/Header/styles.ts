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

export const BtnText = styled.p`
  font-size: 20px;
  margin-right: 10px;
`;

export const Button = styled.div`
  background-color: ${colors.primary01};
  display: flex;
  align-items: center;
  color: ${colors.white};
  width: fit-content;
  justify-content: space-between;
  padding: 10px;
  gap: 20px;
  border-radius: 30px;
  font-size: 15px;
  overflow: hidden;
`;
