interface Timeframe {
  current: number;
  previous: number;
}

export interface AtividadeContextState {
  title: string | null;
  timeframes: Timeframe | null;
  timeframeAtivo: 'daily' | 'weekly' | 'monthly' | null;
}

export enum AtividadeActionName {
  SET_TIMEFRAME_DAILY = 'SET_TIMEFRAME_DAILY',
  SET_TIMEFRAME_WEEKLY = 'SET_TIMEFRAME_WEEKLY',
  SET_TIMEFRAME_MONTHLY = 'SET_TIMEFRAME_MONTHLY',
}

export interface AtividadeContextActionPayloads {
  [AtividadeActionName.SET_TIMEFRAME_DAILY]: AtividadeContextState;
  [AtividadeActionName.SET_TIMEFRAME_WEEKLY]: AtividadeContextState;
  [AtividadeActionName.SET_TIMEFRAME_MONTHLY]: AtividadeContextState;
}

export interface AtividadeContextAction {
  type: AtividadeActionName;
  payload: unknown;
}

export type AtividadeDispatch = <T extends AtividadeActionName>(
  type: T,
  payload: AtividadeContextActionPayloads[T]
) => void;
