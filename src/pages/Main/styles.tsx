import styled from 'styled-components';
import { configs } from 'configs/customizations';

export const StyledContainer = styled.div`
  width: 100%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 60px;
  margin: auto;
  width: 100%;
  background-color: ${configs?.backgroundColorWhite};
  display: -ms-flexbox;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14pt;
  font-family: 'Montserrat', sans-serif;
  line-height: 1em;

  > img {
    height: 270px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    font-size: 12pt;
    padding: 0px;

    > img {
      visibility: hidden;
      height: 0px;
    }
  }
`;

export const SeeAll = styled.div`
  display: -ms-flexbox;
  display: flex;
  margin: 20px;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const ButtonSeeAll = styled.a`
  min-width: 180px;
  padding: 20px;
  font-size: 16px;
  background-color: ${configs?.primary};
  color: ${configs?.backgroundColorWhite};
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  text-align: center;
  font-weight: 500;

  &:hover {
    background-color: ${configs?.primary};
    color: ${configs?.backgroundColorWhite};
    text-decoration: none;
  }
`;

export const TextDescription = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: left;
  align-items: left;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 40px;
`;

export const Toolbar = styled.div`
  background-color: ${configs?.primary};
  width: 100%;
  z-index: 2;
  display: -ms-flexbox;
  display: flex;
  height: 70px;
  -ms-flex-pack: center;
  justify-content: center;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      height: 35px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    font-size: 12pt;
    padding: 0px;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        height: 25px;
      }
    }
  }
`;
