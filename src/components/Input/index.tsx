import { InputVariant } from "../../types/component";
import { StyledInput } from "./styles";

interface InputProps {
  type: InputVariant;
  placeholder?: string;
  children?: React.JSX.Element[] | React.JSX.Element;
}

export default function Input({ type, placeholder, children }: InputProps) {
  return (
    <StyledInput type={type} placeholder={placeholder}>
      {children}
    </StyledInput>
  );
}
