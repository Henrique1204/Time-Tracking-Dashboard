import React, { FC } from 'react';

import estilos from './SideBar.module.css';

import CardUsuario from '../CardUsuario';
import TabNavPeriodos from '../TabNavPeriodos';

import imgJeremy from '../../Assets/image-jeremy.png';

/**
 * Componente responsável por montar a sidebar lateral com as informações do usuário e a navegação das tabs.
 */
const SideBar: FC = () => {
  return (
    <aside className={estilos.container}>
      <CardUsuario foto={imgJeremy} nome="Jeremy Robson" />
      <TabNavPeriodos />
    </aside>
  );
};

export default SideBar;
