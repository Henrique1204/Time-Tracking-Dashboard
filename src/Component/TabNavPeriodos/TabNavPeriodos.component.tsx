import React, { FC } from 'react';

import estilos from './TabNavPeriodos.module.css';

/**
 * Componente responsável pela navegação entre as tabs dos períodos das atividades.
 */
const TabNavPeriodos: FC = () => {
  return (
    <nav className={estilos.container}>
      <ul>
        <li className={estilos.opcaoTab}>
          <button>Daily</button>
        </li>
        <li className={estilos.opcaoTab}>
          <button>Weekly</button>
        </li>
        <li className={estilos.opcaoTab}>
          <button>Monthly</button>
        </li>
      </ul>
    </nav>
  );
};

export default TabNavPeriodos;
