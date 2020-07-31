import * as React from 'react';
import ItemsCarousel from 'react-items-carousel';
import moment from 'moment';
import LiveIcon from 'assets/live.svg';
import { configs } from 'configs/customizations';
import { loadAllGroups } from './webinarsCarousel'
import {
  CardDate,
  CardTitle,
  Container,
  ContainerCarousel,
  Item,
  Title,
} from './styles';

interface WebinarsCarouselProps {
  groupId?: number;
  webinars?: any;
  live?: boolean;
  title: string;
}

function WebinarsCarousel({ title, webinars, live, groupId }: WebinarsCarouselProps) {
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const [numberCards, setNumberCards] = React.useState(0);
  const [stateWebinars, setStateWebinars] = React.useState(webinars || []);
  const [render, setRender] = React.useState(true)

  const chevronWidth = 20;

  const handleLayoutChange = () => {
    const currentWidth = window.innerWidth;

    if (currentWidth < 1000 && currentWidth > 600) {
      setNumberCards(4);
    } else if (currentWidth < 600 && currentWidth > 500) {
      setNumberCards(3);
    } else if (currentWidth < 500 && currentWidth > 400) {
      setNumberCards(2);
    } else if (currentWidth < 400) {
      setNumberCards(1);
    } else if (currentWidth > 1600) {
      setNumberCards(6);
    } else {
      setNumberCards(5);
    }
  };

  React.useEffect(() => {

    async function loadWebinars() {

      if (groupId && render) {
        const { talks } = await loadAllGroups(groupId)
        setStateWebinars(talks)
        setRender(false)
      }

    }
    loadWebinars();

    return () => {
      setStateWebinars([])
      setRender(false)
    };
  }, [])


  React.useEffect(() => {
    window.addEventListener('resize', () => {
      handleLayoutChange();
    });

    return () => {
      window.removeEventListener('resize', () => {
        handleLayoutChange();
      });
    };
  }, []);

  return (
    <Container>
      <ContainerCarousel>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {live && (
            <img
              src={LiveIcon}
              alt="live"
              width="30px"
              style={{ marginRight: '10px' }}
            />
          )}
          <Title>{title}</Title>
        </div>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={numberCards === 0 ? handleLayoutChange() : numberCards}
          gutter={2}
          slidesToScroll={1}
          infiniteLoop={true}
          outsideChevron
          chevronWidth={chevronWidth}
          leftChevron={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-left"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
              <path
                fillRule="evenodd"
                d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          }
          rightChevron={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
              />
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          }
        >
          {stateWebinars.length > 0 && stateWebinars
            .reverse((a: any, b: any) => a.start_time + b.start_time)
            .map(webinar => (
              <>
                <a
                  href={webinar?.url}
                  key={webinar?.id}
                  rel="noreferrer"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <Item>
                    <img
                      className="d-block w-100"
                      src={webinar.cover || configs?.defaultImage}
                      alt={webinar?.title}
                    />

                    <CardTitle>{webinar?.title}</CardTitle>
                    <CardDate>
                      {moment(webinar?.start_time)
                        .locale('pt-br')
                        .format('DD/MM/YYYY - hh:mm')}
                    </CardDate>
                  </Item>
                </a>
              </>
            ))}
        </ItemsCarousel>
      </ContainerCarousel>
    </Container>
  );
}

WebinarsCarousel.defaultProps = {
  live: false,
};

export default WebinarsCarousel;
