import React from 'react';

import SideBar from './Component/SideBar';
import CardAtividade from './Component/CardAtividade';
import { useAtividade } from './Context/Atividade.context';

const App = (): JSX.Element => {
  const atividade = useAtividade();

  return (
    <main className="App">
      <SideBar />

      {atividade?.atividades.map(({ title, timeframes }, index) => (
        <CardAtividade
          key={`${title}_${index}`}
          tipo={title}
          horasAtuais={timeframes?.current}
          horasPassadas={timeframes?.previous}
          periodo={atividade.timeframeAtivo}
        />
      ))}
    </main>
  );
};

export default App;
