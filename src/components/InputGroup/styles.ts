import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MenuForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 45px;

  >input {
    outline: none;
    margin-bottom: 24px;
    border-radius: 5px;
    padding: 18px 13px;
    border: none;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.02);
  }

  >p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;

    letter-spacing: 0.01em;

    color: #94A3B3;

    >a {
      color: blue;
    }
  }

  >button {
    outline: none;
    margin: 18px auto;
    padding: 10px 24px;
    width: 160px;
    background-color: #7DD56F;
    color: #fff;
    border: none;
    cursor:pointer;
  }
`;

export const Termos = styled.div`

`;
