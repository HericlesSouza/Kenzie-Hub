import styled from "styled-components";

export const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  margin-top: 24px;
  padding: 22px 9px;
  background: var(--grey-3);
  border-radius: var(--border-radius);
  width: 100%;
  max-height: 500px;
  overflow-y: auto;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: var(--grey-4);
    border-radius: var(--border-radius);

    h3 {
      font-weight: var(--font-weight-3);
      font-size: var(--title-1);
      line-height: 24px;
      color: var(--grey-0);
    }

    span {
      font-size: var(--headline-1);
      line-height: 22px;
      color: var(--grey-1);
    }
  }
`;
