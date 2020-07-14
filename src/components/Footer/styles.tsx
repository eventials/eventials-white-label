import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 280px;
  padding: 50px;
  background-color: #152e4d;
  color: #fff;
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;

  > a {
    > img {
      width: 120px;
    }
  }

  > div {
    > ul {
      font-size: 12px;
      list-style: none;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > a {
      > img {
        margin-top: 20px;
        width: 100px;
      }
    }

    > div {
      margin-top: 10px;
      > ul {
        font-size: 10px;
        list-style: none;
      }
    }
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;

  > p {
    font-size: 12px;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`;
