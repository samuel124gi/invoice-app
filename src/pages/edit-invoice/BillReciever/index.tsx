import { InnerContainer, Title, Label, Second, First } from "./styles";
import Input from "../../../components/Input";

export default function BillReciever() {
  return (
    <InnerContainer>
      <First>
        <Title>Bill To</Title>
      </First>
      <Label>
        Client's Name
        <br />
        <Input type="text" />
      </Label>
      <Label>
        Client's Email
        <br />
        <Input type="text" />
      </Label>
      <Label>
        Street Address
        <br />
        <Input type="text" />
      </Label>

      <Second>
        <Label>
          City <br />
          <Input type="text" />
        </Label>
        <Label>
          Post Cade <br />
          <Input type="text" />
        </Label>
        <Label>
          Country <br />
          <Input type="text" />
        </Label>
      </Second>
    </InnerContainer>
  );
}
