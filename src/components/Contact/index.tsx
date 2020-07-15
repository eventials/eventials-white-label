import { configs } from 'configs/customizations';
import * as React from 'react';
import {
  ContainerContact,
  ContainerTitleContact,
  StyledContainer,
  StyledForm,
} from './styles';

function Contact() {
  return (
    <StyledContainer>
      <ContainerTitleContact>
        <img src={configs?.imageTitleContact} alt="contact" />
        <h2>
          Ficou com alguma dúvida sobre o conteúdo ou quer sugerir algum
          assunto?
        </h2>
        <h2>Nos envie uma mensagem!</h2>
      </ContainerTitleContact>
      <ContainerContact>
        <StyledForm>
          <StyledForm.Group controlId="exampleForm.ControlInput1">
            <StyledForm.Control type="text" placeholder="Name" />
          </StyledForm.Group>

          <StyledForm.Group controlId="exampleForm.ControlInput1">
            <StyledForm.Control type="email" placeholder="E-mail" />
          </StyledForm.Group>

          <StyledForm.Group controlId="exampleForm.ControlTextarea1">
            <StyledForm.Control as="textarea" rows={3} placeholder="Message" />
          </StyledForm.Group>
          <button type="button" onClick={() => {}}>
            SEND
          </button>
        </StyledForm>
      </ContainerContact>
    </StyledContainer>
  );
}

export default Contact;
