import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 10.5px 16.5px;
  background: var(--grey-2);
  border: 2px solid var(--grey-0);
  border-radius: var(--border-radius);
  font-size: var(--title-1);
  line-height: 26px;
  color: var(--grey-0);
  
  :focus {
    outline: 2px solid var(--color-primary);
    border: none;
  }

  ::placeholder {
    color: var(--grey-1);
  }
`;
