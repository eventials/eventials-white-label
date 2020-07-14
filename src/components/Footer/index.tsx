import * as React from 'react';
import SocialMedia from 'components/SocialMedia';
import { StyledContainer, ContainerTop, ContainerBottom } from './styles';

function Footer() {
  return (
    <StyledContainer>
      <ContainerTop>
        <a href="https://eventials.com">
          <img
            src="https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/logo.png"
            alt="logo"
          />
        </a>
        <div>
          <ul>
            <li>SND DISTRIBUIÇÃO DE PRODUTOS DE INFORMÁTICA SA</li>
            <li>AV. COPACABANA, 238 – BARUERI – SP - 06472-001</li>
            <li>Tel.: (11) 2187-8400</li>
          </ul>
        </div>
        <SocialMedia />
      </ContainerTop>

      <ContainerBottom>
        <hr style={{ backgroundColor: '#fff', width: '100%' }} />

        <p style={{ width: '100%' }}>
          Powered by Eventials Plataforma de Webinars
        </p>
        <p>Copyright © . Todos os direitos reservados.</p>
      </ContainerBottom>
    </StyledContainer>
  );
}

export default Footer;
