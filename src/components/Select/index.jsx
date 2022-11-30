import { StyledSelect } from "./style";

export const Select = ({ children, placeholder, id }) => {
  return (
    <StyledSelect id={id} placeholder={placeholder}>
      {children}
    </StyledSelect>
  );
};
