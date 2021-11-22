import React, { createContext, useContext, useReducer } from 'react';
import data from '../data.json';

import {
  AtividadeContextAction,
  AtividadeContextState,
  AtividadeDispatch,
  AtividadeActionName,
  TimeframeKeys,
} from './types/Atividade.interface';

const INITIAL_STATE: AtividadeContextState = {
  atividades: [],
  timeframeAtivo: null,
};

const AtividadeContext = createContext<
  [AtividadeContextState, AtividadeDispatch] | null
>(null);

const atividadeReducer = (
  state: AtividadeContextState,
  action: AtividadeContextAction
): AtividadeContextState => {
  switch (action.type) {
    case AtividadeActionName.SET_TIMEFRAME:
      localStorage.setItem('timeframe', action.payload);

      return { ...state, timeframeAtivo: action.payload };
    case AtividadeActionName.SET_ATIVIDADES:
      return { ...state, atividades: action.payload };
    default:
      return state;
  }
};

export const AtividadeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(atividadeReducer, INITIAL_STATE);

  React.useEffect(() => {
    if (!state.timeframeAtivo) {
      const timeframeInStorage = localStorage.getItem(
        'timeframe'
      ) as TimeframeKeys;

      return dispatch({
        type: AtividadeActionName.SET_TIMEFRAME,
        payload: timeframeInStorage || 'daily',
      });
    }

    const atividades = data.map(({ title, timeframes }) => ({
      title: title.toLowerCase().replace(' ', '_'),
      timeframes: timeframes[state.timeframeAtivo as TimeframeKeys],
    }));

    dispatch({
      type: AtividadeActionName.SET_ATIVIDADES,
      payload: atividades,
    });
  }, [state.timeframeAtivo]);

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
