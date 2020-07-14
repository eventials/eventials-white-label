import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background-image: url('https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/background_formulario.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 150% 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    background-size: 250%;
    height: 500px;
  }

  @media (max-width: 500px) {
    background-image: url('');
    height: 350px;
  }
`;

export const ContainerTitleContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;

  > img {
    width: 300px;
    margin-bottom: 30px;
  }

  > h2 {
    color: #43464a;
    font-size: 22px;
    font-family: 'Inter';
    width: 90%;
  }

  @media (max-width: 1100px) {
    font-size: 12pt;
    padding: 0px;

    > img {
      width: 200px;
      margin-bottom: 30px;
      margin-left: 50px;
    }

    > h2 {
      font-size: 12pt;
      margin-left: 50px;
    }
  }

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;

    > img {
      width: 150px;
    }

    > h2 {
      font-size: 10pt;
      text-align: center;
    }
  }

  @media (max-width: 700px) {
    font-size: 12pt;
    padding: 0px;

    > img {
      visibility: hidden;
      height: 0px;
      width: 0px;
    }

    > h2 {
      visibility: hidden;
      font-size: 0px;
      height: 0px;
      width: 0px;
    }
  }
`;

export const ContainerContact = styled.div`
  padding: 20px;
  opacity: 0.95;
  border-radius: 5px;
  -ms-flex-align: center;
  align-items: center;
  background: #152e4d;
  border-radius: 5px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0px 50px 0px 100px;

  @media (max-width: 1100px) {
    margin-right: 50px;
  }

  @media (max-width: 800px) {
    margin: 0px;
    width: 240px;
  }

  @media (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 55px;
  background-color: #ff4d1f;
  border-color: #ff4d1f;
  color: white;
  text-transform: uppercase;
  font-size: 17px;

  &:hover {
    background-color: #ff4d1f;
    border-color: #ff4d1f;
    opacity: 0.9;
  }
`;

export const StyledForm = styled(Form)``;
