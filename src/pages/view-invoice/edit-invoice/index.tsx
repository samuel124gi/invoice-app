import { HeaderSpan, Header, Heading, InnerContainer } from "./styles";
import BillSender from "./BillSender";
import BillReciever from "./BillReciever";

export default function EditInvoice() {
  return (
    <InnerContainer>
      <Header>
        <Heading>Edit</Heading>
        <HeaderSpan>#</HeaderSpan>
        <Heading>XM9141</Heading>
      </Header>
      <BillSender />
      <BillReciever />
    </InnerContainer>
  );
}
