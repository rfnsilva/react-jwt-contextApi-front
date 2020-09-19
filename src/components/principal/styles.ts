import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(180deg, #5DC74D 0%, rgba(93, 199, 77, 0.67) 100%);
  width: 100%;
  height: 100vh;

  > h2 {
    display: flex;
    overflow-wrap: break-word;

    > p {
      color: #ddd;
      width: 800px;
    }
  }
`;

export const Dados = styled.div`
  background: #fff;
`;

