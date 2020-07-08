import * as React from 'react';
import SocialMedia from 'components/SocialMedia';
import { StyledContainer } from './styles';

function Footer() {
  return (
    <StyledContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <a href="https://eventials.com">
          <img
            className="whitelabel-logo"
            src="https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/logo.png"
            alt="logo"
          />
        </a>
        <div className="whitelabel-footer-info">
          <ul style={{ listStyle: 'none' }}>
            <li>SND DISTRIBUIÇÃO DE PRODUTOS DE INFORMÁTICA SA</li>
            <li>AV. COPACABANA, 238 – BARUERI – SP - 06472-001</li>
            <li>Tel.: (11) 2187-8400</li>
          </ul>
        </div>
        <SocialMedia />
      </div>

      <div style={{ width: '100%' }}>
        <hr style={{ backgroundColor: '#fff' }} />

        <p className="whitelabel-copyright">
          Powered by Eventials Plataforma de Webinars
        </p>
        <p className="snd-copyright">
          Copyright © . Todos os direitos reservados.
        </p>
      </div>
    </StyledContainer>
  );
}

export default Footer;
