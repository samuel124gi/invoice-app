import { StyledStatus, StatusIndicator } from "./styles";
import { StatusVariant } from "../../types/component";

interface ButtonProps {
  type: StatusVariant;
  label?: string;
  children?: React.JSX.Element[] | React.JSX.Element;
  onClick?: () => void;
}

export const Status = ({ type, label, children }: ButtonProps) => {
  return (
    <StyledStatus type={type}>
      <StatusIndicator type={type} />
      {children || label}
    </StyledStatus>
  );
};
