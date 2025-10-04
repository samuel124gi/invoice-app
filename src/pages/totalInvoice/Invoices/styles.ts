import styled from "@emotion/styled";
import colors from "../../../styles/color";

export const Innercontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 100px 0px 0px 0px;
`;

export const InvoiceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  gap: 100px;
  padding: 30px 20px;
  border-radius: 8px;
  background-color: ${colors.white};
`;
export const InvoiceName = styled.p`
  font-size: 15px;
  line-height: 15px;
  letter-sapcing: -0.25px;
  font-weight: bold;
  color: ${colors.primary08};
`;
export const InvoiceDate = styled.p`
  font-size: 13px;
  line-hieght: 15px;
  letter-spacing: -0.1px;
  color: ${colors.primary07};
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
export const Name = styled.p`
  font-family: League Spartan;
  font-size: 13px;
  line-hieght: 15px;
  letter-spacing: -0.1px;
  color: #858bb2;
`;

export const InvoicePrice = styled.h1`
  font-size: 15px;
  line-hieght: 24px;
  letter-spacing: -0.25px;
  color: ${colors.primary08};
`;

export const PaidButton = styled.div`
  background: rgba(51, 214, 159, 0.05);
  color: #33d69f;
  display: flex;
  gap: 10px;
  border-radius: 8px;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: none;
  width: 104px;
  height: 40px;
`;

export const PendingButton = styled.div`
  background: rgba(255, 143, 0, 0.05);
  color: #ff8f00;
  display: flex;
  gap: 10px;
  border-radius: 8px;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: none;
  width: 104px;
  height: 40px;
`;
export const DraftButton = styled.div`
  background-color: rgba(55, 59, 83, 0.05);
  color: #373b53;
  display: flex;
  gap: 10px;
  border-radius: 8px;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: none;
  width: 104px;
  height: 40px;
`;
export const PaidDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #33d69f;
  //   opacity: 500%;
`;
export const PendingDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ff8f00;
  //   opacity: 500%;
`;
export const DraftDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #373b53;
  //   opacity: 500%;
`;
export const Status = styled.p`
  font-size: 15px;
  line-hieght: 24px;
  letter-spacing: -0.25px;
  font-weight: bold;
  margin-top: 4px;
`;

export const Next = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
