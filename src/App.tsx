import dotenv from 'dotenv';
import React from 'react';
import Main from './pages/Main';
import GlobalStyle from './styles/global';

function App() {
  React.useEffect(() => {
    dotenv.config();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
