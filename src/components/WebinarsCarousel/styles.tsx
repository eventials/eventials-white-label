import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f5;
`;

export const ContainerCarousel = styled.div`
  padding: 30px 60px;
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 1500px) {
    max-width: 100%;
  }
`;

export const Title = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  margin: 0px 0px 5px 0px;
  font-family: 'Inter';
  text-align: 'center';
  font-weight: 500;
  font-size: 20px;
  font-weight: bold;
`;

export const Item = styled.div`
  height: 250px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1200px) {
    height: 200px;
    width: 150px;
    margin: 0px 10px 0px 10px;
  }

  @media (max-width: 900px) {
    height: 200px;
    width: 150px;
  }

  @media (max-width: 750px) {
    height: 180px;
    width: 130px;
  }
`;

export const CardTitle = styled.label`
  color: #343434;
  font-weight: bold;
  display: block;
  margin-top: 10px;
  font-size: 13px;
  font-family: 'Inter';
  -webkit-font-smoothing: antialiased;
  line-height: 1.4em;
  overflow-wrap: break-word;
  cursor: pointer;

  @media (max-width: 900px) {
    font-size: 11px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;

export const CardDate = styled.label`
  color: #535252;
  font-size: 11px;
  cursor: pointer;
`;
