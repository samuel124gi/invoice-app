import {
  MainContainer,
  StatusText,
  RightContainer,
  LeftContainer,
} from "./styles";
import { Status } from "../../../components/Status";
import Button from "../../../components/Button";

export default function Header() {
  return (
    <MainContainer>
      <LeftContainer>
        <StatusText>Status</StatusText>
        <Status type="pending" label="Pending" />
      </LeftContainer>
      <RightContainer>
        <Button variant="tertiary" label="Edit" />
        <Button variant="delete" label="Delete" />
        <Button variant="secondary" label="Mark as Paid" />
      </RightContainer>
    </MainContainer>
  );
}
