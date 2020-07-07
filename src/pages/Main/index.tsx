/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import CustomCarousel from 'components/CustomCarousel';
import { Container, Toolbar } from './styles';

function Main() {
  return (
    <>
      {/* <div className="loading">
        <span />
      </div> */}
      <Container>
        <Toolbar>
          <a href="https://eventials.com">
            <img
              src="https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/logo.png"
              alt="logo"
            />
          </a>
        </Toolbar>

        {/* <div className="carousel-banner-wrapper">
          <div className="owl-carousel owl-theme">
            <div className="carousel-container">
              <img
                src="https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/Banner1.jpg"
                alt="banner1"
              />
              <img
                src="https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/Banner2.jpg"
                alt="banner2"
              />
            </div>
            
          </div>
          <div className="dots"></div>
        </div> */}

        <CustomCarousel />

        <div className="description">
          <img
            src="https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/banner_texto_vazio_cortado.png"
            alt="Description"
          />
          <div className="text">
            <p>
              Bem-vindo a <b className="orange bold">Universidade</b>
              <span className="bold">SND</span>, o canal que proporciona
              conhecimento aos nossos clientes.
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
              <span className="bold">Aproveite!</span>
            </p>
          </div>
        </div>

        {/* {% if groups|length or courses|length %} */}
        <div className="whitelabel-tracks">
          {/* {% if live_talks|length %} */}
          <h3 className="whitelabel-upcomings-title">
            <img
              src="https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/red-camera-icon.png"
              alt="live"
            />
            Ao vivo
          </h3>
          <div className="carousel-wrapper">
            <div className="nav nav-prev">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path opacity=".87" fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" />
                </svg>
              </span>
            </div>
            <div className="owl-carousel owl-theme">
              {/* {% for talk in live_talks %}
            {% include 'whitelabel_snd/partial/profile-tracks.html' with talk=talk %}
            {% endfor %} */}

              <div className="item">
                <div className="card">
                  {/* <a href="{% url 'core_talk' username=talk.owner.username talk_slug=talk.slug %}"> */}
                  <a href="https://eventials.com">
                    {/* {% thumbnail talk.image 'talk.xlarge' as im %} */}
                    <img
                      src="https://static.eventials.com/media/thumb_cache/fa/d9/fad9687b9dce60bd6a99a733b944aaf0.jpg"
                      alt="thumbnail"
                    />
                    {/* {% endthumbnail %} */}
                  </a>
                </div>
                <label className="card-title">Card Title</label>
                <label className="card-start-time">talk|start_time </label>
              </div>
            </div>
            <div className="nav nav-next">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path opacity=".87" fill="none" d="M24 24H0V0h24v24z" />
                  <path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
                </svg>
              </span>
            </div>
          </div>
          {/* {% endif %} */}

          {/* {% if courses|length %} */}
          <h3 className="whitelabel-upcomings-title">CURSOS</h3>
          {/* {% for course in courses %} */}
          {/* {% if course.talks %} */}
          <h3 className="whitelabel-tracks-title"> course.name </h3>
          <div className="carousel-wrapper">
            <div className="nav nav-prev">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path opacity=".87" fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" />
                </svg>
              </span>
            </div>
            <div className="owl-carousel owl-theme">
              {/* {% for talk in course.talks %}
            {% include 'whitelabel_snd/partial/profile-tracks.html' with talk=talk %}
            {% endfor %} */}
              <div className="item">
                <div className="card">
                  {/* <a href="{% url 'core_talk' username=talk.owner.username talk_slug=talk.slug %}"> */}
                  <a href="https://eventials.com">
                    {/* {% thumbnail talk.image 'talk.xlarge' as im %} */}
                    <img
                      src="https://static.eventials.com/media/thumb_cache/fa/d9/fad9687b9dce60bd6a99a733b944aaf0.jpg"
                      alt="thumbnail"
                    />
                    {/* {% endthumbnail %} */}
                  </a>
                </div>
                <label className="card-title">Card Title</label>
                <label className="card-start-time">talk|start_time </label>
              </div>
              <a
                className="item see-all"
                href="{% url 'group' username=course.owner.username group_kind=course.kind_pluralized group_slug=course.slug %}"
              >
                <div className="card">Ver todos</div>
              </a>
            </div>
            <div className="nav nav-next">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path opacity=".87" fill="none" d="M24 24H0V0h24v24z" />
                  <path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
                </svg>
              </span>
            </div>
          </div>
          {/* {% endif %}
    {% endfor %}
    {% endif %} */}

          {/* {% if groups|length %}
    {% for group in groups %}
    {% if group.talks  %} */}
          <h3 className="whitelabel-tracks-title"> group.name </h3>
          <div className="carousel-wrapper">
            <div className="nav nav-prev">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path opacity=".87" fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" />
                </svg>
              </span>
            </div>
            <div className="owl-carousel owl-theme">
              {/* {% for talk in group.talks %}
            {% include 'whitelabel_snd/partial/profile-tracks.html' with talk=talk %}
            {% endfor %} */}
              <div className="item">
                <div className="card">
                  {/* <a href="{% url 'core_talk' username=talk.owner.username talk_slug=talk.slug %}"> */}
                  <a href="https://eventials.com">
                    {/* {% thumbnail talk.image 'talk.xlarge' as im %} */}
                    <img
                      src="https://static.eventials.com/media/thumb_cache/fa/d9/fad9687b9dce60bd6a99a733b944aaf0.jpg"
                      alt="thumbnail"
                    />
                    {/* {% endthumbnail %} */}
                  </a>
                </div>
                <label className="card-title">Card Title</label>
                <label className="card-start-time">talk|start_time </label>
              </div>
              <a
                className="item see-all"
                href="{% url 'group' username=group.owner.username group_kind=group.kind_pluralized group_slug=group.slug %}"
              >
                <div className="card">Ver todos</div>
              </a>
            </div>
            <div className="nav nav-next">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path opacity=".87" fill="none" d="M24 24H0V0h24v24z" />
                  <path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
                </svg>
              </span>
            </div>
          </div>
          {/* {% endif %}
    {% endfor %}
    {% endif %} */}

          <div className="see-all">
            <a href="{% url 'profile_talks' username=owner.username %}">
              Ver todos
            </a>
          </div>
        </div>

        {/* {% endif %}

{% if events|length %} */}

        <div className="event-title">
          <h2>Calendário de Eventos</h2>
        </div>

        <div className="card-event-container">
          {/* {% for event in events %} */}
          <div className="card-event {% if forloop.counter0 > 2 %}card-event-hidden{% endif %}">
            <div className="image">
              <img
                src="https://static.eventials.com/media/thumb_cache/fa/d9/fad9687b9dce60bd6a99a733b944aaf0.jpg"
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
        <div className="see-all">
          <a id="toggleEvents" href="https://eventials.com">
            Ver todos
          </a>
        </div>
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
      </Container>
    </>
  );
}

export default Main;
