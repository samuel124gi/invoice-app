import styled from "@emotion/styled";
import colors from "../../styles/color";

export const Container = styled.div`
  width: 103px;
  background-color: ${colors.secondary01};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`;
export const TopContainer = styled.div``;
export const ButtonContaier = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 30px;
`;
export const Line = styled.hr`
  border: none;
  width: 100%;
  height: 3px;
  background-color: ${colors.secondary02};
`;
