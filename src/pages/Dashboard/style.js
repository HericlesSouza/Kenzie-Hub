import styled from "styled-components";

export const StyledDiv = styled.div`
  header {
    width: 100vw;
    border-bottom: 1px solid var(--grey-3);

    & > div {
      padding: 29px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    a {
      text-align: center;
      border-radius: var(--border-radius);
      color: var(--white);
      text-decoration: none;
      width: max-content;
      background: var(--grey-2);
      border: 1px solid var(--grey-2);

      :hover {
        background: var(--grey-1);
        border: 1px solid var(--grey-1);
      }

      font-weight: var(--font-weight-2);
      font-size: var(--headline);
      line-height: 28px;
      padding: 8px 16px;
    }
  }

  & > section:nth-child(2) {
    margin-top: 35px;
    border-bottom: 1px solid var(--grey-3);

    & > div {
      padding: 0 20px;

      @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 35px;
      }

      h1 {
        font-weight: var(--font-weight-3);
        font-size: var(--title-3);
        line-height: 28px;
        color: var(--grey-0);
      }

      p {
        margin: 10px 0 35px 0;
        font-size: var(--headline-1);
        line-height: 22px;
        color: var(--grey-1);

        @media (min-width: 1024px) {
          margin: 0;
        }
      }
    }
  }

  & > section:nth-child(3) {
    padding: 0 20px;
    margin-top: 26px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h2 {
      font-weight: var(--font-weight-2);
      font-size: var(--title-4);
      line-height: 18px;
      color: var(--grey-0);
    }

    p {
      margin-top: 23px;
      font-size: var(--title-1);
      line-height: 24px;
      color: var(--white);
    }
  }
`;
