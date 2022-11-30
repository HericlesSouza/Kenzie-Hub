import { StyledButton } from "./style";

export const Button = ({ children, color, size }) => {
  return (
    <StyledButton buttonColor={color} buttonSize={size}>
      {children}
    </StyledButton>
  );
};
