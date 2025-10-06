import { InnerContainer, Title, Label, Second, First } from "./styles";
import Input from "../../../../components/Input";

export default function BillReciever() {
  return (
    <InnerContainer>
      <First>
        <Title>Bill To</Title>
      </First>
      <Label>
        Client's Name
        <br />
        <Input type="text" placeholder="Alex Grim" />
      </Label>
      <Label>
        Client's Email
        <br />
        <Input type="text" placeholder="alexgrim@mail.com" />
      </Label>
      <Label>
        Street Address
        <br />
        <Input type="text" placeholder="84 Church Way" />
      </Label>

      <Second>
        <Label>
          City <br />
          <Input type="text" placeholder="Bradford" />
        </Label>
        <Label>
          Post Cade <br />
          <Input type="text" placeholder="BD1 9PB" />
        </Label>
        <Label>
          Country <br />
          <Input type="text" placeholder="United Kingdom" />
        </Label>
      </Second>
    </InnerContainer>
  );
}
