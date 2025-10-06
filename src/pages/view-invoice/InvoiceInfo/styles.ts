import styled from "@emotion/styled";
import colors from "../../../styles/color";

export const InnerContainer = styled.div`
  background: ${colors.white};
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftContainer = styled.div``;
export const RightContainer = styled.div``;
export const Text = styled.p`
  color: ${colors.primary07};
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  font-weight: 500;
`;

export const AddressText = styled.p`
  color: ${colors.primary07};
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;
  font-weight: 500;
`;
export const Header = styled.h1`
  color: ${colors.primary08};
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
`;

export const InvoiceName = styled.div`
  display: flex;
  align-items: center;
`;

export const SecondContainer = styled.div`
  display: flex;
  gap: 100px;
`;

export const InvoiceDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InvoiceReciever = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const OwnerEmail = styled.div``;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ThirdContainer = styled.div`
  background-color: #f9fafe;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  overflow: hidden;
  border-radius: 8px;
`;

export const Sections = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemValue = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;

export const SecondItemValue = styled.div`
  display: flex;
  gap: 53.5px;
  align-items: center;
`;
export const Right = styled.div`
  display: flex;
  gap: 81px;
`;

export const AmmountDiv = styled.div`
  background-color: #373b53;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
`;
export const AmmountText = styled.p`
  color: ${colors.white};
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.1px;
  font-weight: 500;
`;
export const AmmountPrice = styled.h1`
  color: ${colors.white};
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  font-weight: bold;
`;

export const LastContainer = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  overflow: hidden;
`;
