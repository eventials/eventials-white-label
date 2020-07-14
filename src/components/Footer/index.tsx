import * as React from 'react';
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
          <a href="https://eventials.com">
            <img
              src="https://s3.amazonaws.com/dev-assets.eventials.com/logo.png"
              alt="logo"
            />
          </a>
        </div>
        <div>
          <ul>
            <li>SND DISTRIBUIÇÃO DE PRODUTOS DE INFORMÁTICA SA</li>
            <li>AV. COPACABANA, 238 – BARUERI – SP - 06472-001</li>
            <li>Tel.: (11) 2187-8400</li>
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
