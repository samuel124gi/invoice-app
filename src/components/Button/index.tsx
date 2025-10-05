import { ButtonVariant } from "../../types/component";
import { StyledButton, AddButton } from "./styles";
import Increase from "../../assets/icons/add.svg";

interface ButtonProps {
  variant: ButtonVariant;
  label?: string;
  children?: React.JSX.Element[] | React.JSX.Element;
  onClick?: () => void;
}

export default function Button({ variant, label, children }: ButtonProps) {
  return (
    <StyledButton variant={variant}>
      <AddButton>
        <Increase />
      </AddButton>
      {children || label}
    </StyledButton>
  );
}
