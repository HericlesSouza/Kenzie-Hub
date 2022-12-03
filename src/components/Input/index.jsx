import { StyledInput } from "./style";

export const Input = ({ type, placeholder, id, register }) => {
  return (
    <StyledInput id={id} type={type} placeholder={placeholder} {...register} />
  );
};
