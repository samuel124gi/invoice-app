// import React from 'react'
import {
  InvoiceContainer,
  InvoiceName,
  InvoiceDate,
  RightContainer,
  LeftContainer,
  Name,
  InvoicePrice,
  PaidDot,
  PendingDot,
  DraftDot,
  Status,
  Innercontainer,
  Next,
} from "./styles";

import { Button } from "../../../components/Status";
import NextStatus from "../../../assets/icons/next.svg";
export default function Invoices() {
  return (
    <>
      <Innercontainer>
        <InvoiceContainer>
          <LeftContainer>
            <InvoiceName>#RT3080</InvoiceName>
            <InvoiceDate>Due 19 Aug 2021</InvoiceDate>
            <Name>Jensen Huang</Name>
          </LeftContainer>
          <RightContainer>
            <InvoicePrice>£ 1,800.90</InvoicePrice>
            <Next>
              <Button variant="primary">
                <PaidDot />
                <Status>Paid</Status>
              </Button>
              <NextStatus />
            </Next>
          </RightContainer>
        </InvoiceContainer>
        <InvoiceContainer>
          <LeftContainer>
            <InvoiceName>#XM9141</InvoiceName>
            <InvoiceDate>Due 20 Sep 2021</InvoiceDate>
            <Name>Alex Grim</Name>
          </LeftContainer>
          <RightContainer>
            <InvoicePrice>£ 556.00</InvoicePrice>
            <Next>
              <Button variant="secondary">
                <PendingDot />
                <Status>Pending</Status>
              </Button>
              <NextStatus />
            </Next>
          </RightContainer>
        </InvoiceContainer>
        <InvoiceContainer>
          <LeftContainer>
            <InvoiceName>#RG0314</InvoiceName>
            <InvoiceDate>Due 01 Oct 2021</InvoiceDate>
            <Name>John Morrison</Name>
          </LeftContainer>
          <RightContainer>
            <InvoicePrice>£ 14,002.33</InvoicePrice>
            <Next>
              <Button variant="primary">
                <PaidDot />
                <Status>Paid</Status>
              </Button>
              <NextStatus />
            </Next>
          </RightContainer>
        </InvoiceContainer>
        <InvoiceContainer>
          <LeftContainer>
            <InvoiceName>#RT2080</InvoiceName>
            <InvoiceDate>Due 14 Oct 2021</InvoiceDate>
            <Name>Mellisa Clarke</Name>
          </LeftContainer>
          <RightContainer>
            <InvoicePrice>£ 4,032.33</InvoicePrice>
            <Next>
              <Button variant="secondary">
                <PendingDot />
                <Status>Pending</Status>
              </Button>
              <NextStatus />
            </Next>
          </RightContainer>
        </InvoiceContainer>
        <InvoiceContainer>
          <LeftContainer>
            <InvoiceName>#TY9141</InvoiceName>
            <InvoiceDate>Due 31 Oct 2021</InvoiceDate>
            <Name>Thomas Wayne</Name>
          </LeftContainer>
          <RightContainer>
            <InvoicePrice>£ 6,155.91</InvoicePrice>
            <Next>
              <Button variant="secondary">
                <PendingDot />
                <Status>Pending</Status>
              </Button>
              <NextStatus />
            </Next>
          </RightContainer>
        </InvoiceContainer>
        <InvoiceContainer>
          <LeftContainer>
            <InvoiceName>#FV2353</InvoiceName>
            <InvoiceDate>Due 12 Nov 2021</InvoiceDate>
            <Name>Anita Wainwright</Name>
          </LeftContainer>
          <RightContainer>
            <InvoicePrice>£ 3,102.04</InvoicePrice>
            <Next>
              <Button variant="tertiary">
                <DraftDot />
                <Status>Draft</Status>
              </Button>
              <NextStatus />
            </Next>
          </RightContainer>
        </InvoiceContainer>
      </Innercontainer>
    </>
  );
}
