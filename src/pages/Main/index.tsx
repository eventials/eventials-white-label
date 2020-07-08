/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import BannerCarousel from 'components/BannerCarousel';
import WebinarCarousel from 'components/WebinarsCarousel';
import Container from 'react-bootstrap/Container';
import * as React from 'react';
import {
  ButtonSeeAll,
  Description,
  SeeAll,
  StyledContainer,
  TextDescription,
  Toolbar,
} from './styles';

function Main() {
  return (
    <>
      {/* <div className="loading">
        <span />
      </div> */}
      <StyledContainer>
        <Toolbar>
          <a href="https://eventials.com">
            <img
              src="https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/logo.png"
              alt="logo"
            />
          </a>
        </Toolbar>

        <BannerCarousel />

        <Container>
          <Description>
            <img
              src="https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/banner_texto_vazio_cortado.png"
              alt="Description"
            />
            <TextDescription>
              <p>
                Bem-vindo a <b style={{ color: '#ff4d1f' }}>Universidade</b>
                <span style={{ fontWeight: 700 }}> SND</span>, o canal que
                proporciona conhecimento aos nossos clientes.
              </p>
              <p>
                Compartilhamos expertise e apoiamos o seu desenvolvimento. Aqui
                você confere conteúdos recentes sobre os principais fabricantes
                de tecnologia, de qualquer dispositivo e em qualquer lugar.
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
        </Container>

        <WebinarCarousel title="Cloud" />
        <WebinarCarousel title="Cibersegurança" />
        <WebinarCarousel title="Networking" />
        <WebinarCarousel title="Educação" />
        <WebinarCarousel title="Institucional SND" />
        <WebinarCarousel title="Colaboração" />
        <WebinarCarousel title="Componentes" />
        <WebinarCarousel title="Computadores e TVs" />
        <WebinarCarousel title="Games e PC Gamer" />
        <WebinarCarousel title="Softwares ESD e OEM" />
        <div className="event-title">
          <h2>Calendário de Eventos</h2>
        </div>

        <div className="card-event-container">
          {/* {% for event in events %} */}
          <div className="card-event {% if forloop.counter0 > 2 %}card-event-hidden{% endif %}">
            <div className="image">
              <img
                src="https://static.eventials.com/media/thumb_cache/ca/11/ca1172d4e13cfb0b8f5c12b305f2a7db.jpg"
                alt="event"
              />
            </div>
            <div className="content">
              <div className="date">event.date</div>
              <div className="name">event.name</div>
              <div className="location">event.location</div>
            </div>
          </div>
          {/* {% endfor %} */}
        </div>
        {/* {% if events|length > 3 %} */}
        <SeeAll>
          <ButtonSeeAll id="toggleEvents" href="https://eventials.com">
            Ver todos
          </ButtonSeeAll>
        </SeeAll>
        {/* {% endif %} */}
        {/* {% endif %} */}

        <div
          className="whitelabel-contact"
          style={{
            backgroundImage: `url(
            'https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/background_formulario.png',
          )`,
          }}
        >
          <div className="whitelabel-contact-container">
            <div className="whitelabel-contact-text">
              <img
                src="https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/title_formulario.png"
                alt="contact-title"
              />
              <h2>
                Ficou com alguma dúvida sobre o conteúdo ou quer sugerir algum
                assunto?
              </h2>
              <h2>Nos envie uma mensagem!</h2>
            </div>
            <form method="POST" className="whitelabel-contact-form">
              {/* {% csrf_token %} */}

              {/* {{ contact_form.name }} */}
              {/* {% for error in contact_form.name.errors %} */}
              <span className="whitelabel-form-field-error">error|escape</span>
              {/* {% endfor %} */}

              {/* {{ contact_form.email }} */}
              {/* {% for error in contact_form.email.errors %} */}
              <span className="whitelabel-form-field-error">error|escape</span>
              {/* {% endfor %} */}

              {/* {{ contact_form.message }} */}
              {/* {% for error in contact_form.message.errors %} */}
              <span className="whitelabel-form-field-error"> error|escape</span>
              {/* {% endfor %} */}
              <button className="whitelabel-btn" type="button">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="whitelabel-footer">
          <div className="whitelabel-footer-container">
            <div className="whitelabel-footer-logo">
              <a href="https://eventials.com">
                <img
                  className="whitelabel-logo"
                  src="https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/logo.png"
                  alt="logo"
                />
              </a>
              <div className="whitelabel-footer-info">
                <ul>
                  <li>SND DISTRIBUIÇÃO DE PRODUTOS DE INFORMÁTICA SA</li>
                  <li>AV. COPACABANA, 238 – BARUERI – SP - 06472-001</li>
                  <li>Tel.: (11) 2187-8400</li>
                </ul>
              </div>
              {/* {% include 'whitelabel_snd/partial/profile-social-icons.html' with medias=social_medias %} */}
            </div>

            <hr className="whitelabel-linebreak" />

            <p className="whitelabel-copyright">
              {/* {% blocktrans with channel_name=owner.get_usable_name trimmed %} */}
              Powered by Eventials Plataforma de Webinars
              {/* {% endblocktrans %} */}
            </p>
            <p className="snd-copyright">
              Copyright © . Todos os direitos reservados.
            </p>
          </div>
        </div>
      </StyledContainer>
    </>
  );
}

export default Main;
