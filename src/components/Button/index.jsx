import { StyledButton } from "./style";

export const Button = ({ children, color, size, width }) => {
  return (
    <StyledButton buttonColor={color} buttonSize={size} buttonWidth={width}>
      {children}
    </StyledButton>
  );
};
