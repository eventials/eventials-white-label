import * as React from 'react';
import { configs } from 'configs/customizations';
import SocialMedia from 'components/SocialMedia';
import { FormattedMessage } from 'react-intl';
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
        <hr
          style={{ backgroundColor: configs?.backgroundColor, width: '100%' }}
        />

        <ContainerText>
          <p>
            <FormattedMessage id="development" />
          </p>
          <p>
            Copyright © . <FormattedMessage id="copyright" />
          </p>
        </ContainerText>
      </ContainerBottom>
    </StyledContainer>
  );
}

export default Footer;
