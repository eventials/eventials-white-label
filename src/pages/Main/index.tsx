/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import BannerCarousel from 'components/BannerCarousel';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import WebinarCarousel from 'components/WebinarsCarousel';
import * as React from 'react';
import { configs } from 'configs/customizations';
import {
  generateToken,
  listAllWebinars,
  listCategories,
  getCurrentUser,
} from 'services/requests';
import {
  Description,
  StyledContainer,
  TextDescription,
  Toolbar,
  SeeAll,
  ButtonSeeAll,
} from './styles';

function Main() {
  const [webinars, setWebinars] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      // await generateToken(
      //   'd5b204bed8024dde9c86836319f3849b',
      //   'b4f6568ca2534c23acdf728e0e717a71',
      // );
      // await getCurrentUser();
      // await listCategories();
      const response = await listAllWebinars();

      if (response?.status !== 200) {
        console.log(`Falha na api, erro  ${response.status}`);
      }
      setWebinars(response.data);
    }

    fetchData();
  }, []);

  const handleLayoutChange = () => {
    const currentWidth = window.innerWidth;
    console.log(currentWidth);
  };

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
    <>
      {/* <div className="loading">
        <span />
      </div> */}
      <StyledContainer>
        <Toolbar>
          <a href={configs?.site}>
            <img src={configs?.logo} alt="logo" />
          </a>
        </Toolbar>

        <BannerCarousel />

        <Description>
          <img src={configs?.descriptionImage} alt="Description" />
          <TextDescription>
            <p>
              Bem-vindo a <b style={{ color: '#ff4d1f' }}>Universidade</b>
              <span style={{ fontWeight: 700 }}> SND</span>, o canal que
              proporciona conhecimento aos nossos clientes.
            </p>
            <p>
              Compartilhamos expertise e apoiamos o seu desenvolvimento. Aqui
              você confere conteúdos recentes sobre os principais fabricantes de
              tecnologia, de qualquer dispositivo e em qualquer lugar.
            </p>
            <p>
              Uma grande parte dos nossos vídeos são interativos, mas é você
              quem faz a sua rotina e quem dita o calendário.
            </p>
            <p>
              <span style={{ fontWeight: 700 }}>Aproveite!</span>
            </p>
          </TextDescription>
        </Description>

        {webinars.length > 0 && (
          <>
            <WebinarCarousel title="Cloud" webinars={webinars} />
            <WebinarCarousel title="Cibersegurança" webinars={webinars} />
            <WebinarCarousel title="Networking" webinars={webinars} />
          </>
        )}
        {/* <WebinarCarousel title="Educação" />
        <WebinarCarousel title="Institucional SND" />
        <WebinarCarousel title="Colaboração" />
        <WebinarCarousel title="Componentes" />
        <WebinarCarousel title="Computadores e TVs" />
        <WebinarCarousel title="Games e PC Gamer" />
        <WebinarCarousel title="Softwares ESD e OEM" /> */}
        {/* <div className="event-title">
          <h2>Calendário de Eventos</h2>
        </div> */}

        {/* <div className="card-event-container">
          <div className="card-event {% if forloop.counter0 > 2 %}card-event-hidden{% endif %}">
            <div className="image">
              <img
                src="https://static.eventials.com/media/thumb_cache/ca/ll11/ca1172d4e13cfb0b8f5c12b305f2a7db.jpg"
                alt="event"
              />
            </div>
            <div className="content">
              <div className="date">event.date</div>
              <div className="name">event.name</div>
              <div className="location">event.location</div>
            </div>
          </div>
        </div> */}
        <SeeAll>
          <ButtonSeeAll id="toggleEvents" href="https://eventials.com">
            Ver todos
          </ButtonSeeAll>
        </SeeAll>

        <Contact />

        <Footer />
      </StyledContainer>
    </>
  );
}

export default Main;
