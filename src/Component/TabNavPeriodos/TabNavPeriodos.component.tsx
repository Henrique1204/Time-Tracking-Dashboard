import React, { FC } from 'react';
import { useAtividade } from '../../Context/Atividade.context';
import {
  AtividadeActionName,
  TimeframeKeys,
} from '../../Context/types/Atividade.interface';

import estilos from './TabNavPeriodos.module.css';

/**
 * Componente responsável pela navegação entre as tabs dos períodos das atividades.
 */
const TabNavPeriodos: FC = () => {
  const atividade = useAtividade();

  const trocarPeriodo = (periodo: TimeframeKeys) => {
    atividade?.dispatch(AtividadeActionName.SET_TIMEFRAME, periodo);
  };

  return (
    <nav className={estilos.container}>
      <ul>
        <li
          className={`
            ${estilos.opcaoTab}
            ${atividade?.timeframeAtivo === 'daily' ? estilos.ativo : ''}
          `}
        >
          <button onClick={() => trocarPeriodo('daily')}>Daily</button>
        </li>
        <li
          className={`
            ${estilos.opcaoTab}
            ${atividade?.timeframeAtivo === 'weekly' ? estilos.ativo : ''}
          `}
        >
          <button onClick={() => trocarPeriodo('weekly')}>Weekly</button>
        </li>
        <li
          className={`
            ${estilos.opcaoTab}
            ${atividade?.timeframeAtivo === 'monthly' ? estilos.ativo : ''}
          `}
        >
          <button onClick={() => trocarPeriodo('monthly')}>Monthly</button>
        </li>
      </ul>
    </nav>
  );
};

export default TabNavPeriodos;
