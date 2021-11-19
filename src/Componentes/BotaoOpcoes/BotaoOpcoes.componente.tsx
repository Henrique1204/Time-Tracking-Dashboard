import React, { FC, MouseEventHandler } from 'react';

import estilos from './BotaoOpcoes.module.css';

type BotaoOpcoesProps = {
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
};

/**
 * Componente responsável por abrir o painel de opções.
 * @param {MouseEventHandler<HTMLButtonElement>} [onMouseEnter] Evento que irá ser executado quando o cursor do mouse entrar do elemento.
 * @param {MouseEventHandler<HTMLButtonElement>} [onMouseLeave] Evento que irá ser executado quando o cursor do mouse sair do elemento.
 */
const BotaoOpcoes: FC<BotaoOpcoesProps> = ({ ...props }) => {
  return (
    <button className={estilos.container} {...props}>
      <span className={estilos.bolinhas}></span>
    </button>
  );
};

export default BotaoOpcoes;
