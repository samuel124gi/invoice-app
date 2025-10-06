import { InnerContainer, Title, Label, Second, First } from "./styles";
import Input from "../../../components/Input";

export default function BillSender() {
  return (
    <InnerContainer>
      <First>
        <Title>Bill From</Title>
      </First>
      <Label>
        Street Address <br />
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
