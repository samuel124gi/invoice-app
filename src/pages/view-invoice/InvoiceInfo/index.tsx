import {
  FirstContainer,
  InnerContainer,
  Text,
  Header,
  InvoiceName,
  RightContainer,
  LeftContainer,
  SecondContainer,
  InvoiceDate,
  InvoiceReciever,
  OwnerEmail,
  Description,
  AddressText,
  ThirdContainer,
  Sections,
  ItemValue,
  Right,
  SecondItemValue,
  AmmountDiv,
  AmmountText,
  AmmountPrice,
  LastContainer,
} from "./styles";

export default function InvoiceInfo() {
  return (
    <InnerContainer>
      <FirstContainer>
        <LeftContainer>
          <InvoiceName>
            <Text>#</Text>
            <Header>XM9141</Header>
          </InvoiceName>
          <Text>Graphic Design</Text>
        </LeftContainer>
        <RightContainer>
          <AddressText>
            19 Union Terrace <br />
            London <br />
            E1 3EZ <br />
            United Kingdom <br />
          </AddressText>
        </RightContainer>
      </FirstContainer>
      <SecondContainer>
        <InvoiceDate>
          <Description>
            <Text>Invoice Date</Text>
            <Header>21 Aug 2021</Header>
          </Description>
          <Description>
            <Text>Payment Due</Text>
            <Header>20 Sep 2021</Header>
          </Description>
        </InvoiceDate>
        <InvoiceReciever>
          <Description>
            <Text>Bill to</Text>
            <Header>Alex Grim</Header>
          </Description>
          <AddressText>
            84 Church Way <br /> Bradford <br /> BD1 9PB <br /> United Kingdom
          </AddressText>
        </InvoiceReciever>
        <OwnerEmail>
          <Description>
            <Text>Sent to</Text>
            <Header>alexgrim@mail.com</Header>
          </Description>
        </OwnerEmail>
      </SecondContainer>
      <LastContainer>
        <ThirdContainer>
          <Sections>
            <LeftContainer>
              <Text>Item Name</Text>
            </LeftContainer>
            <Right>
              <Text>Qrt</Text>
              <Text>Price</Text>
              <Text>Total</Text>
            </Right>
          </Sections>
          <Sections>
            <LeftContainer>
              <Header>Banner Design</Header>
            </LeftContainer>
            <RightContainer>
              <ItemValue>
                <Text>1</Text>
                <Text>£ 156.00</Text> <Header>£ 156.00</Header>
              </ItemValue>
            </RightContainer>
          </Sections>
          <Sections>
            <LeftContainer>
              <Header>Item Name</Header>
            </LeftContainer>
            <RightContainer>
              <SecondItemValue>
                <Text>2</Text>
                <Text>£ 200.00</Text> <Header>£ 400.00</Header>
              </SecondItemValue>
            </RightContainer>
          </Sections>
        </ThirdContainer>
        <AmmountDiv>
          <AmmountText>Amount Due</AmmountText>
          <AmmountPrice>£ 556.00</AmmountPrice>
        </AmmountDiv>
      </LastContainer>
    </InnerContainer>
  );
}
