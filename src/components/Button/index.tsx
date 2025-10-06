import { ButtonVariant } from "../../types/component";
import { StyledButton } from "./styles";

interface ButtonProps {
  variant: ButtonVariant;
  label?: string;
  children?: React.JSX.Element[] | React.JSX.Element;
  onClick?: () => void;
}

export default function Button({ variant, label, children }: ButtonProps) {
  return <StyledButton variant={variant}>{children || label}</StyledButton>;
}
