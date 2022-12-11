import { StyledInput } from "./style";

export const Input = ({ type, placeholder, id, register, disabled, color }) => {
  return (
    <StyledInput id={id} type={type} placeholder={placeholder} {...register} disabled={disabled} color={color}/>
  );
};
