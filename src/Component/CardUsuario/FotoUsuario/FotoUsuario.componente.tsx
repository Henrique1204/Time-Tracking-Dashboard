import React, { FC } from 'react';

import estilos from './FotoUsuario.module.css';

type FotoUsuarioProps = {
  src: string;
  alt: string;
};

/**
 * Componente responsável por exbibir a imagem de perfil do usuário.
 * @param {string} src Caminho da imagem.
 * @param {string} alt Texto alternativo da imagem.
 */
const FotoUsuario: FC<FotoUsuarioProps> = ({ src, alt }) => {
  return (
    <div className={estilos.container}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default FotoUsuario;
