/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import BannerCarousel from 'components/BannerCarousel';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import WebinarCarousel from 'components/WebinarsCarousel';
import { configs } from 'configs/customizations';
import * as React from 'react';
import { listAllWebinars } from 'services/requests';
import {
  ButtonSeeAll,
  Description,
  SeeAll,
  StyledContainer,
  TextDescription,
  Toolbar,
} from './styles';

function Main() {
  const [webinars, setWebinars] = React.useState([]);
  const [liveWebinars, setLiveWebinars] = React.useState([]);

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
        return;
      }
      const { data } = response;

      const live = await data.filter(web => web?.state === 'live');

      setLiveWebinars(live);
      setWebinars(data);
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
              Bem-vindo a <b style={{ color: configs?.second }}>Universidade</b>
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
            {liveWebinars.length > 0 && (
              <WebinarCarousel title="Ao Vivo" webinars={liveWebinars} live />
            )}
            <WebinarCarousel title="Cloud" webinars={webinars} />
            <WebinarCarousel title="Cibersegurança" webinars={webinars} />
            <WebinarCarousel title="Networking" webinars={webinars} />
          </>
        )}

        <SeeAll>
          <ButtonSeeAll id="toggleEvents" href={configs?.allWebinars}>
            Ver todos
          </ButtonSeeAll>
        </SeeAll>

        {configs?.contact && <Contact />}

        {configs?.contact && <Contact />}

        <Footer />
      </StyledContainer>
    </>
  );
}

export default Main;
