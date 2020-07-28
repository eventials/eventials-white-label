import BannerCarousel from 'components/BannerCarousel';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import WebinarCarousel from 'components/WebinarsCarousel';
import { configs } from 'configs/customizations';
import * as React from 'react';
import { listAllWebinars, generateToken, refreshToken } from 'services/requests';
import {
  ButtonSeeAll,
  Description,
  SeeAll,
  StyledContainer,
  TextDescription,
  Toolbar,
} from './styles';
import { getToken, getRefreshToken } from 'services/organization';

function Main() {
  const [render, setRender] = React.useState(false)
  const [webinars, setWebinars] = React.useState([]);
  const [liveWebinars, setLiveWebinars] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {

      let token: any = getToken();

      if (!token) {
        const { access_token }: any = await generateToken()
        token = access_token;
      }

      let response = await listAllWebinars(token);

      if (response?.status === 401) {
        if (getRefreshToken()) {
          token = await refreshToken(getRefreshToken())
          response = await listAllWebinars(token)
          setRender(!render)
        } else {
          token = await generateToken();
        }
      } else {
        const { data } = response;
        const live = await data.filter(web => web?.state === 'live');

        setLiveWebinars(live);
        setWebinars(data);
      }

      if (response?.status > 200 && response?.status !== 401) {
        console.log(`Falha na api, erro  ${response.status}`);
        return;
      }



    }

    fetchData();
  }, [render]);

  const handleLayoutChange = () => {
    const currentWidth = window.innerWidth;
    console.log(currentWidth)
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
              Bem-vindo a <b style={{ color: configs?.textDescription }}>Eventials</b>!
            </p>
            <p>
              Até 2020, <b style={{ color: configs?.textDescription }}>75%</b> do tráfego mobile de todo o mundo acontecerá por meio de
              conteúdo em vídeo. Se prepare para essa tendência e junte-se ao grupo de empresas
              que escolheram a <b style={{ color: configs?.textDescription }}>Eventials</b> como parceira nesta jornada.
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
