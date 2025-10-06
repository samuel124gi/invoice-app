import Increase from "../../assets/icons/add.svg";
import { AddButton, Text, InnerContent } from "./styles";
export default function Add() {
  return (
    <InnerContent>
      <AddButton>
        <Increase />
      </AddButton>
      <Text>New Invoice</Text>
    </InnerContent>
  );
}
