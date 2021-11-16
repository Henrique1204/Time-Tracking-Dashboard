import React, { FC } from 'react';

import estilos from './CardAtividade.module.css';

type TipoAtividade =
  | 'work'
  | 'play'
  | 'study'
  | 'exercise'
  | 'social'
  | 'self_care';

type CardAtividadeProps = {
  tipo: TipoAtividade;
  horasAtuais: number;
  horasPassadas: number;
};

/**
 * Componente responsável por exbibir as informações das atividades do usuário.
 * @param {TipoAtividade} props.tipo Tipo de atividade que o usuário realziou.
 * @param {number} props.horaAtual Quantas horas o usuário executou a atividade no período atual.
 * @param {number} props.horasPassadas Quantas horas o usuário executou a atividade no período passado.
 */
const CardAtividade: FC<CardAtividadeProps> = ({
  tipo,
  horasAtuais,
  horasPassadas,
}) => {
  return (
    <div className={`${estilos.container} ${estilos[tipo]}`}>
      <div className={estilos.conteudo}>
        <span className={estilos.categoria}>{tipo.replace('_', ' ')}</span>

        <h2 className={estilos.horas}>{horasAtuais}hrs</h2>

        <span className={estilos.ultimaSemana}>
          Last Week - {horasPassadas}hrs
        </span>
      </div>
    </div>
  );
};

export default CardAtividade;
