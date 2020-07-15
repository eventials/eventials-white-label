import * as React from 'react';
import { configs } from 'configs/customizations';
import SocialMedia from 'components/SocialMedia';
import {
  StyledContainer,
  ContainerTop,
  ContainerBottom,
  ContainerText,
} from './styles';

function Footer() {
  return (
    <StyledContainer>
      <ContainerTop>
        <div>
          <a href={configs?.site}>
            <img src={configs?.logo} alt="logo" />
          </a>
        </div>
        <div>
          <ul>
            <li>{configs?.name}</li>
            <li>{configs?.adress}</li>
            <li>{configs?.phone}</li>
          </ul>
        </div>
        <div>
          <SocialMedia />
        </div>
      </ContainerTop>

      <ContainerBottom>
        <hr style={{ backgroundColor: '#fff', width: '100%' }} />

        <ContainerText>
          <p>Powered by Eventials Plataforma de Webinars</p>
          <p>Copyright © . Todos os direitos reservados.</p>
        </ContainerText>
      </ContainerBottom>
    </StyledContainer>
  );
}

export default Footer;
