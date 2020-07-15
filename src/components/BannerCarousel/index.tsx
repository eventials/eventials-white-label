import { configs } from 'configs/customizations';
import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function BannerCarousel() {
  return (
    <Carousel>
      {configs?.banner.map(b => (
        <Carousel.Item key={b}>
          <img className="d-block w-100" src={b} alt="Banner" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BannerCarousel;
