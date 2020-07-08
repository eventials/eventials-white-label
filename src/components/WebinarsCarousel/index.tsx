import * as React from 'react';
import {
  Container,
  StyledCarousel,
  Item,
  Title,
  CardTitle,
  CardData,
} from './styles';

interface WebinarsCarouselProps {
  title: string;
}

function WebinarsCarousel({ title }: WebinarsCarouselProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <StyledCarousel indicators={false} fade slide={false}>
        <StyledCarousel.Item
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
          }}
        >
          <Item>
            <img
              className="d-block w-100"
              src="https://static.eventials.com/media/thumb_cache/ca/11/ca1172d4e13cfb0b8f5c12b305f2a7db.jpg"
              alt="First slide"
            />
            <CardTitle>Argumentos comerciais para venda de Lenovo</CardTitle>
            <CardData>30/06/2020 ás 11:30</CardData>
          </Item>
          <Item>
            <img
              className="d-block w-100"
              src="https://static.eventials.com/media/thumb_cache/45/c0/45c0591f04d220d779722bba5c12a273.jpg"
              alt="First slide"
            />
            <CardTitle>Argumentos comerciais para venda de Lenovo</CardTitle>
            <CardData>30/06/2020 ás 11:30</CardData>
          </Item>
          <Item>
            <img
              className="d-block w-100"
              src="https://static.eventials.com/media/thumb_cache/f3/91/f3910d56bc0edfd0929023045431cbce.jpg"
              alt="First slide"
            />
            <CardTitle>Argumentos comerciais para venda de Lenovo</CardTitle>
            <CardData>30/06/2020 ás 11:30</CardData>
          </Item>
          <Item>
            <img
              className="d-block w-100"
              src="https://static.eventials.com/media/thumb_cache/f3/91/f3910d56bc0edfd0929023045431cbce.jpg"
              alt="First slide"
            />
            <CardTitle>Argumentos comerciais para venda de Lenovo</CardTitle>
            <CardData>30/06/2020 ás 11:30</CardData>
          </Item>
          <Item>
            <img
              className="d-block w-100"
              src="https://static.eventials.com/media/thumb_cache/f3/91/f3910d56bc0edfd0929023045431cbce.jpg"
              alt="First slide"
            />
            <CardTitle>Argumentos comerciais para venda de Lenovo</CardTitle>
            <CardData>30/06/2020 ás 11:30</CardData>
          </Item>
        </StyledCarousel.Item>
        <StyledCarousel.Item
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
          }}
        >
          <Item>
            <img
              className="d-block w-100"
              src="https://static.eventials.com/media/thumb_cache/f3/91/f3910d56bc0edfd0929023045431cbce.jpg"
              alt="First slide"
            />
            <CardTitle>Argumentos comerciais para venda de Lenovo</CardTitle>
            <CardData>30/06/2020 ás 11:30</CardData>
          </Item>
          <Item>
            <img
              className="d-block w-100"
              src="https://static.eventials.com/media/thumb_cache/f3/91/f3910d56bc0edfd0929023045431cbce.jpg"
              alt="First slide"
            />
            <CardTitle>Argumentos comerciais para venda de Lenovo</CardTitle>
            <CardData>30/06/2020 ás 11:30</CardData>
          </Item>

          <Item>
            <img
              className="d-block w-100"
              src="https://static.eventials.com/media/thumb_cache/45/c0/45c0591f04d220d779722bba5c12a273.jpg"
              alt="First slide"
            />
            <CardTitle>Argumentos comerciais para venda de Lenovo</CardTitle>
            <CardData>30/06/2020 ás 11:30</CardData>
          </Item>
          <Item>
            <img
              className="d-block w-100"
              src="https://static.eventials.com/media/thumb_cache/f3/91/f3910d56bc0edfd0929023045431cbce.jpg"
              alt="First slide"
            />
            <CardTitle>Argumentos comerciais para venda de Lenovo</CardTitle>
            <CardData>30/06/2020 ás 11:30</CardData>
          </Item>
          <Item>
            <img
              className="d-block w-100"
              src="https://static.eventials.com/media/thumb_cache/f3/91/f3910d56bc0edfd0929023045431cbce.jpg"
              alt="First slide"
            />
            <CardTitle>Argumentos comerciais para venda de Lenovo</CardTitle>
            <CardData>30/06/2020 ás 11:30</CardData>
          </Item>
        </StyledCarousel.Item>
      </StyledCarousel>
    </Container>
  );
}

export default WebinarsCarousel;
