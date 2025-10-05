// import React from 'react'
import {
  MainContainer,
  RightContainer,
  LeftContainer,
  Heading,
  BtnText,
  AddButton,
  Button,
} from "./styles";

// import React from 'react'

export function Title() {
  return <p>jhkgjh</p>;
}

import Increase from "../../assets/icons/add.svg";
import Dropdown from "../../shared/Dropdown";
export default function Header() {
  return (
    <>
      <MainContainer>
        <LeftContainer>
          <Heading>Invoices</Heading>
          {/* <SubTitle>No Invoices</SubTitle> */}
        </LeftContainer>
        <RightContainer>
          <Dropdown />
          <Button>
            <AddButton>
              <Increase />
            </AddButton>
            <BtnText>New Invoice</BtnText>
          </Button>
        </RightContainer>
      </MainContainer>
    </>
  );
}
