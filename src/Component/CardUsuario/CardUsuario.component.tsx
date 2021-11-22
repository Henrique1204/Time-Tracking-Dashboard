import React, { FC } from 'react';

import estilos from './CardUsuario.module.css';
import FotoUsuario from './FotoUsuario';

type CardUsuarioProps = {
  foto: string;
  nome: string;
};

/**
 * Componente responsável por exbibir as informações do perfil do usuário.
 * @param {string} foto Caimnho para a foto do usuário.
 * @param {string} nome Nome do usuário.
 */
const CardUsuario: FC<CardUsuarioProps> = ({ foto, nome }) => {
  return (
    <div className={estilos.container}>
      <FotoUsuario src={foto} alt={`Foto de perfil do usuário ${nome}.`} />

      <span className={estilos.subtitulo}>Report for</span>

      <h1 className={estilos.titulo}>Jeremy Robson</h1>
    </div>
  );
};

export default CardUsuario;
