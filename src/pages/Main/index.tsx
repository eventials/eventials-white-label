import BannerCarousel from 'components/BannerCarousel';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import WebinarCarousel from 'components/WebinarsCarousel';
import { configs } from 'configs/customizations';
import * as React from 'react';
import { loadAllGroups, loadLiveWebinars } from './main'
import {
  ButtonSeeAll,
  Description,
  SeeAll,
  StyledContainer,
  TextDescription,
  Toolbar
} from './styles';

function Main() {
  const [groups, setGroups]: any = React.useState([]);
  const [liveWebinars, setLiveWebinars] = React.useState([]);

  React.useEffect(() => {
    async function loadGroups() {

      setLiveWebinars(await loadLiveWebinars())
      setGroups(await loadAllGroups())

    }

    loadGroups();
  }, []);

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

        {liveWebinars?.length > 0 && (
          <WebinarCarousel title="Ao Vivo" webinars={liveWebinars} live={true} />
        )}

        {groups?.length > 0 && (
          <>
            {groups.map(gr =>
              <WebinarCarousel title={gr.description} groupId={gr.id} key={gr.id} />
            )}
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
