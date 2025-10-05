import Sidebar from "../../components/Sidebar";
import { BackButton, MainContainer, InnerContent } from "./styles";
import Back from "../../assets/icons/back.svg";

export default function ViewInvoice() {
  return (
    <div>
      <MainContainer>
        <Sidebar />
        <InnerContent>
          <BackButton>
            <Back /> Go back
          </BackButton>
        </InnerContent>
      </MainContainer>
    </div>
  );
}
