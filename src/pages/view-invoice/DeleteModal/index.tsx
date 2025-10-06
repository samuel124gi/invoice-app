import { MainContainer, Text, Heading, Buttons } from "./styles";
import Button from "../../../components/Button";

export default function DeleteModal() {
  return (
    <MainContainer>
      <Heading>Confirm Deletion</Heading>
      <Text>
        Are you sure you want to delete invoice #XM9141? This action cannot be{" "}
        <br />
        undone.
      </Text>
      <Buttons>
        <Button variant="tertiary" label="Cancel" />
        <Button variant="danger" label="Delete" />
      </Buttons>
    </MainContainer>
  );
}
