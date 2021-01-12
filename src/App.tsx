import React from 'react';

import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';

//o <> é como se fosse uma div, mas ela nao exsite no html, é usada só para englobar mesmo
function App() {
  return (
  
   <>
      <Layout />

      <GlobalStyles />
    </>
  );
}

export default App;
