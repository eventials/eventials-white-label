import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 60px;
  margin: auto;
  width: 100%;
  background-color: #fff;
  display: -ms-flexbox;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14pt;
  font-family: 'Montserrat', sans-serif;
  line-height: 1em;

  > img {
    height: 300px;
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

export const Webinars = styled.div`
  display: -ms-flexbox;
  display: flex;
  max-width: 1410px;
  width: 90%;
  margin: 20px auto;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const LiveTitle = styled.h3`
  text-align: center;
  width: 100%;
  padding: 0;
  margin: 25px 0 10px 0;
  color: rgba(0, 0, 0, 0.8);
  padding-bottom: 15px;
  width: 100%;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 20px;
  padding-left: 60px;
  font-weight: bold;

  > img {
    width: 22px;
    margin-right: 10px;
  }
`;

export const NavPrev = styled.div`
  left: 0px;
`;

export const NavNext = styled.div`
  right: 0px;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  position: relative;

  .nav {
    width: 50px;
    height: 50px;
    top: 100px;
    position: absolute;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;
  }
  .nav-prev {
    left: 0px;
  }
`;

export const ItemsContainer = styled.div`
  width: 100%;
  margin: auto;
`;

export const SeeAll = styled.div`
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin: 5px;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const ButtonSeeAll = styled.a`
  a > {
    min-width: 200px;
    padding: 20px;
    font-size: 16px;
    background-color: #152e4d;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    border: none;
    text-align: center;
    text-decoration: none;
    font-weight: 500;
  }
`;

export const Item = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0 10px 25px 10px;
  text-decoration: none;
  max-width: 200px;

  > div {
    -ms-flex-align: center;
    align-items: center;
    border: none;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 10px;
    height: 142px;
    width: 200px;

    > svg {
      fill: white;
      height: 32px;
      width: 32px;
      cursor: pointer;
    }
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
  background-color: #152e4d;
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
      height: 70%;
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
        height: 50%;
      }
    }
  }
`;
