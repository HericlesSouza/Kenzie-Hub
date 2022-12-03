import { StyledButton } from "./style";

export const Button = ({ children, color, size, width, type, click}) => {

  function onClickButton(event) {
    if(click) {
      event
    }
  }

  return (
    <StyledButton onClick={() => onClickButton(click)} type={type} buttonColor={color} buttonSize={size} buttonWidth={width}>
      {children}
    </StyledButton>
  );
};
