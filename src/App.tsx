import React from 'react';
import messages from 'i18n/messages';
import { IntlProvider } from 'react-intl';
import { getLanguage } from 'i18n/util';
import Main from './pages/Main';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <IntlProvider locale={getLanguage()} messages={messages[getLanguage()]}>
        <GlobalStyle />
        <Main />
      </IntlProvider>
    </>
  );
}

export default App;
