import React from 'react';

import SideBar from './Component/SideBar';
import CardAtividade from './Component/CardAtividade';

const App = (): JSX.Element => {
  return (
    <main className="App">
      <SideBar />

      <CardAtividade tipo="work" horasAtuais={32} horasPassadas={36} />
      <CardAtividade tipo="play" horasAtuais={32} horasPassadas={36} />
      <CardAtividade tipo="study" horasAtuais={32} horasPassadas={36} />
      <CardAtividade tipo="exercise" horasAtuais={32} horasPassadas={36} />
      <CardAtividade tipo="social" horasAtuais={32} horasPassadas={36} />
      <CardAtividade tipo="self_care" horasAtuais={32} horasPassadas={36} />
    </main>
  );
};

export default App;
