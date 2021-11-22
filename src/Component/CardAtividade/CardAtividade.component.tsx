import React, { FC } from 'react';
import BotaoOpcoes from '../BotaoOpcoes';

import estilos from './CardAtividade.module.css';

import {
  TimeframeKeys,
  TitleAtividade,
} from '../../Context/types/Atividade.interface';

type CardAtividadeProps = {
  tipo: TitleAtividade;
  horasAtuais: number;
  horasPassadas: number;
  periodo: TimeframeKeys | null;
};

const textoPeriodo = {
  daily: 'day',
  weekly: 'week',
  monthly: 'month',
};

/**
 * Componente responsável por exbibir as informações das atividades do usuário.
 * @param {TipoAtividade} tipo Tipo de atividade que o usuário realziou.
 * @param {number} horaAtual Quantas horas o usuário executou a atividade no período atual.
 * @param {number} horasPassadas Quantas horas o usuário executou a atividade no período passado.
 * @param {TimeframeKeys} periodo O período ao qual se refere os dados.
 */
const CardAtividade: FC<CardAtividadeProps> = ({
  tipo,
  horasAtuais,
  horasPassadas,
  periodo,
}) => {
  const [opcoesHover, setOpcoesHover] = React.useState<boolean>(false);

  return (
    <div className={`${estilos.container} ${estilos[tipo]}`}>
      <div className={estilos.conteudo} data-hoverinativo={opcoesHover}>
        <span className={estilos.categoria}>{tipo.replace('_', ' ')}</span>

        <BotaoOpcoes
          onMouseEnter={() => setOpcoesHover(true)}
          onMouseLeave={() => setOpcoesHover(false)}
        />

        <h2 className={estilos.horas}>{horasAtuais}hrs</h2>

        {periodo && (
          <span className={estilos.ultimaSemana}>
            Last {textoPeriodo[periodo]} - {horasPassadas}hrs
          </span>
        )}
      </div>
    </div>
  );
};

export default CardAtividade;
