import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  text-align: center;
  border-radius: var(--border-radius);
  color: var(--white);

  ${({ buttonColor }) => {
    switch (buttonColor) {
      case "btnPrimary":
        return css`
          background: var(--color-primary);
          border: 1px solid var(--color-primary);

          :hover {
            background: var(--color-primary-focus);
            border: 1.2182px solid var(--color-primary-focus);
          }
        `;
        
      case "btnGrey":
        return css`
          background: var(--grey-2);
          border: 1px solid var(--grey-2);

          :hover {
            background: var(--grey-1);
            border: 1px solid var(--grey-1);
          }
        `;

      case "btnDisabled":
        return css`
          background: var(--color-primary-negative);
          border: 1px solid var(--color-primary-negative);
        `;
    }
  }}

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "small":
        return css`
          font-weight: var(--font-weight-2);
          font-size: var(--headline);
          line-height: 28px;
          padding: 8px 16px;
        `;

      case "medium":
        return css`
          font-weight: var(--font-weight-1);
          font-size: var(--title-1);
          line-height: 26px;
          padding: 11px 22px;
        `;
    }
  }}
`;
