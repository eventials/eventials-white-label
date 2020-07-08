import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
`;

export const Title = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  margin: 10px 60px 20px 100px;
  font-family: 'Inter';
  text-align: 'center';
  font-weight: 500;
  font-size: 20px;
  font-weight: bold;
`;

export const Item = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0 10px 25px 10px;
  text-decoration: none;
  max-width: 200px;
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
`;

export const CardData = styled.label`
  color: #535252;
  font-size: 11px;
`;
