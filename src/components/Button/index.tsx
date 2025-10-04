import { StyledButton } from "./styles";
import { ButtonVariant } from "../../types/component";

interface ButtonProps {
  variant: ButtonVariant;
  label?: string;
  children?: React.JSX.Element;
  onClick?: () => void;
}

export const Button = ({ variant, label, children }: ButtonProps) => {
  return <StyledButton variant={variant}>{children || label}</StyledButton>;
};
