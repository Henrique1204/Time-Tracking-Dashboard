import React from 'react';

import CardUsuario from './Componentes/CardUsuario';
import TabNavPeriodos from './Componentes/TabNavPeriodos';

import imgJeremy from './Assets/image-jeremy.png';

const App = (): JSX.Element => {
  return (
    <main className="App">
      <CardUsuario foto={imgJeremy} nome="Jeremy Robson" />
      <TabNavPeriodos />
    </main>
  );
};

export default App;
