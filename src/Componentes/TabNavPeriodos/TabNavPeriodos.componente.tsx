import React, { FC, ReactNode } from 'react';

import estilos from './TabNavPeriodos.module.css';

type TabNavPeriodosProps = {
  children?: ReactNode;
};

const TabNavPeriodos: FC<TabNavPeriodosProps> = () => {
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
