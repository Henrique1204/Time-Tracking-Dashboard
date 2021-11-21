import React, { createContext, useContext, useReducer } from 'react';

import {
  AtividadeAcoesContexto,
  AtividadeContextoEstado,
  AtividadeDispatch,
  AtividadeNomeAcoes,
} from './types/Atividade.interface';

const INITIAL_STATE: AtividadeContextoEstado = {
  title: null,
  timeframes: null,
  timeframeAtivo: null,
};

const AtividadeContexto =
  createContext<[AtividadeContextoEstado, AtividadeDispatch] | null>(null);

const atividadeReducer = (
  state: AtividadeContextoEstado,
  action: AtividadeAcoesContexto
): AtividadeContextoEstado => {
  switch (action.type) {
    case AtividadeNomeAcoes.SET_TIMEFRAME_DAILY:
      return { ...state };
    case AtividadeNomeAcoes.SET_TIMEFRAME_WEEKLY:
      return { ...state };
    case AtividadeNomeAcoes.SET_TIMEFRAME_MONTHLY:
      return { ...state };
    default:
      return state;
  }
};

export const AtividadeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(atividadeReducer, INITIAL_STATE);

  return (
    <AtividadeContexto.Provider
      value={[state, (type, payload) => dispatch({ type, payload })]}
    >
      {children}
    </AtividadeContexto.Provider>
  );
};

export const useAtividade = () => {
  const atividadeContexto = useContext(AtividadeContexto);

  if (!atividadeContexto) return null;

  return { ...atividadeContexto[0], dispatch: atividadeContexto[1] };
};

export default AtividadeContexto;
