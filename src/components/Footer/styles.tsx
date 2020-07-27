import styled from 'styled-components';
import { configs } from 'configs/customizations';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 280px;
  padding: 50px;
  background-color: ${configs?.footer};
  color: ${configs?.textFooter};

  @media (max-width: 900px) {
    height: 350px;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  > div {
    > a {
      > img {
        height: 40px;
      }
    }
  }

  > div {
    > ul {
      font-size: 10px;
      text-align: center;
      list-style: none;
    }
  }

  @media (max-width: 1100px) {
    align-items: center;
    width: 80%;

    >div {
        > a {
          > img {
            margin-top: 20px;
            height: 30px;
          }
        }
    }

    > div {
      margin-top: 10px;
      > ul {
        font-size: 8px;
        list-style: none;
      }
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    >div {
        > a {
          margin-top: 30px;
          > img {
            height: 40px;
          }
        }
    }

    > div {
      margin-top: 10px;
      > ul {
        font-size: 10px;
        list-style: none;
        text-align: center;
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

  @media (max-width: 1100px) {
    width: 90%;
    text-align: center;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;

  @media (max-width: 900px) {
    flex-direction: column;
    font-size: 12px;
  }
`;
