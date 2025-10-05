import { StyledButton } from "./styles";
import { StatusVariant } from "../../types/component";

interface ButtonProps {
  variant: StatusVariant;
  label?: string;
  children?: React.JSX.Element[] | React.JSX.Element;
  onClick?: () => void;
}

export const Button = ({ variant, label, children }: ButtonProps) => {
  return <StyledButton variant={variant}>{children || label}</StyledButton>;
};
