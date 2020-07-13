import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 350px;
  background-image: url('https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/background_formulario.png');
  background-position: 'center';
  background-size: 100%;
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
  padding: 20px;
  width: 300px;
  margin-left: 100px;
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
