import {
  MainContainer,
  RightContainer,
  LeftContainer,
  Heading,
} from "./styles";

export function Title() {
  return <p>jhkgjh</p>;
}

import Button from "../Button";
import Add from "../../shared/AddButton";

import Dropdown from "../../shared/Dropdown";
export default function Header() {
  return (
    <>
      <MainContainer>
        <LeftContainer>
          <Heading>Invoices</Heading>
        </LeftContainer>
        <RightContainer>
          <Dropdown />
          <Button variant="primary" label="New Invoice">
            <Add />
          </Button>
        </RightContainer>
      </MainContainer>
    </>
  );
}
