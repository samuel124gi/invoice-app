import { InnerContainer, Title, Label, Second, First } from "./styles";
import Input from "../../../../components/Input";

export default function BillSender() {
  return (
    <InnerContainer>
      <First>
        <Title>Bill From</Title>
      </First>
      <Label>
        Street Address <br />
        <Input type="text" placeholder="19 Union Terrace" />
      </Label>

      <Second>
        <Label>
          City <br />
          <Input type="text" placeholder="London" />
        </Label>
        <Label>
          Post Cade <br />
          <Input type="text" placeholder="E1 3EZ" />
        </Label>
        <Label>
          Country <br />
          <Input type="text" placeholder="United Kingdom" />
        </Label>
      </Second>
    </InnerContainer>
  );
}
