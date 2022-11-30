import { StyledInput } from "./style";

export const Input = ({ type, placeholder, id }) => {
  return <StyledInput id={id} type={type} placeholder={placeholder} />;
};
