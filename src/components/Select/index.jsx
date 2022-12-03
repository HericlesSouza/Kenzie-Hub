import { StyledSelect } from "./style";

export const Select = ({ children, placeholder, id, register }) => {
  return (
    <StyledSelect id={id} placeholder={placeholder} {...register}>
      {children}
    </StyledSelect>
  );
};
