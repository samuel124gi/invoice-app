import Sidebar from "../../../components/Sidebar";
import {
  MainContainer,
  InnerContent,
  CenteredContainer,
  CenteredContainerText,
  CenteredContainerHeader,
  CenteredContainerSubtitle,
  CenteredContainerSpan,
} from "./styles";
import Header from "../../../components/Header";
import Attention from "../../../assets/icons/attention.svg";

export default function Empty() {
  return (
    <>
      <MainContainer>
        <Sidebar />
        <InnerContent>
          <Header />
          <CenteredContainer>
            <Attention />
            <CenteredContainerText>
              <CenteredContainerHeader>
                There is nothing here
              </CenteredContainerHeader>
              <CenteredContainerSubtitle>
                Create an invoice by clicking the <br />
                <CenteredContainerSpan>New Invoice</CenteredContainerSpan>{" "}
                button and get started
              </CenteredContainerSubtitle>
            </CenteredContainerText>
          </CenteredContainer>
        </InnerContent>
      </MainContainer>
    </>
  );
}
