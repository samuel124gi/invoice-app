// import React from 'react'
import { Container, ButtonContaier, TopContainer, Line } from "./styles";
import Logo from "../../assets/icons/logo.svg";
import Character from "../../assets/icons/character.svg";
import CrescentLogo from "../../assets/icons/crescent.svg";

export default function Sidebar() {
  return (
    <>
      <Container>
        <TopContainer>
          <Logo />
        </TopContainer>

        <ButtonContaier>
          <CrescentLogo />
          <Line />
          <Character />
        </ButtonContaier>
      </Container>
    </>
  );
}
