// import React from 'react'
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Invoices from "./Invoices";

import { MainContainer, InnerContent } from "./styles";

export default function TotalInvoice() {
  return (
    <>
      <MainContainer>
        <Sidebar />
        <InnerContent>
          <Header />
          <Invoices />
        </InnerContent>
      </MainContainer>
    </>
  );
}
