import React, { createContext, useContext, useReducer } from 'react';

import {
  AtividadeContextAction,
  AtividadeContextState,
  AtividadeDispatch,
  AtividadeActionName,
} from './types/Atividade.interface';

const INITIAL_STATE: AtividadeContextState = {
  title: null,
  timeframes: null,
  timeframeAtivo: null,
};

const AtividadeContext =
  createContext<[AtividadeContextState, AtividadeDispatch] | null>(null);

const atividadeReducer = (
  state: AtividadeContextState,
  action: AtividadeContextAction
): AtividadeContextState => {
  switch (action.type) {
    case AtividadeActionName.SET_TIMEFRAME_DAILY:
      return { ...state };
    case AtividadeActionName.SET_TIMEFRAME_WEEKLY:
      return { ...state };
    case AtividadeActionName.SET_TIMEFRAME_MONTHLY:
      return { ...state };
    default:
      return state;
  }
};

export const AtividadeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(atividadeReducer, INITIAL_STATE);

  return (
    <AtividadeContext.Provider
      value={[state, (type, payload) => dispatch({ type, payload })]}
    >
      {children}
    </AtividadeContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAtividade = () => {
  const atividadeContext = useContext(AtividadeContext);

  if (!atividadeContext) return null;

  return { ...atividadeContext[0], dispatch: atividadeContext[1] };
};

export default AtividadeContext;
