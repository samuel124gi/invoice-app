// import React from 'react'
import {
  MainContainer,
  RightContainer,
  LeftContainer,
  Heading,
  SubTitle,
  Options,
  Select,
  BtnText,
  AddButton,
  Button,
} from "./styles";
import Increase from "../../../assets/icons/add.svg";

export default function Header() {
  return (
    <>
      <MainContainer>
        <LeftContainer>
          <Heading>Invoices</Heading>
          <SubTitle>No Invoices</SubTitle>
        </LeftContainer>
        <RightContainer>
          <Select>
            <Options>Filter by status</Options>
            <Options></Options>
            <Options></Options>
            <Options></Options>
          </Select>
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
