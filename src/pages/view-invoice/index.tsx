import Sidebar from "../../components/Sidebar";
import { BackButton, MainContainer, InnerContent } from "./styles";
import Back from "../../assets/icons/back.svg";
import Header from "./Header";
import InvoiceInfo from "./InvoiceInfo";

export default function ViewInvoice() {
  return (
    <div>
      <MainContainer>
        <Sidebar />
        <InnerContent>
          <BackButton>
            <Back /> Go back
          </BackButton>
          <Header />
          <InvoiceInfo />
        </InnerContent>
      </MainContainer>
    </div>
  );
}
