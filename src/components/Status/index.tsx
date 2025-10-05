import { StyledStatus, StatusIndicator } from "./styles";
import { StatusVariant } from "../../types/component";

interface StatusProps {
  type: StatusVariant;
  label?: string;
  children?: React.JSX.Element[] | React.JSX.Element;
}

export const Status = ({ type, label, children }: StatusProps) => {
  return (
    <StyledStatus type={type}>
      <StatusIndicator type={type} />
      {children || label}
    </StyledStatus>
  );
};
