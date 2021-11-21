interface Timeframe {
  current: number;
  previous: number;
}

export interface AtividadeContextoEstado {
  title: string | null;
  timeframes: Timeframe | null;
  timeframeAtivo: 'daily' | 'weekly' | 'monthly' | null;
}

export enum AtividadeNomeAcoes {
  SET_TIMEFRAME_DAILY = 'SET_TIMEFRAME_DAILY',
  SET_TIMEFRAME_WEEKLY = 'SET_TIMEFRAME_WEEKLY',
  SET_TIMEFRAME_MONTHLY = 'SET_TIMEFRAME_MONTHLY',
}

export interface AtividadeAcoesContextoPayloads {
  [AtividadeNomeAcoes.SET_TIMEFRAME_DAILY]: AtividadeContextoEstado;
  [AtividadeNomeAcoes.SET_TIMEFRAME_WEEKLY]: AtividadeContextoEstado;
  [AtividadeNomeAcoes.SET_TIMEFRAME_MONTHLY]: AtividadeContextoEstado;
}

export interface AtividadeAcoesContexto {
  type: AtividadeNomeAcoes;
  payload: any;
}

export type AtividadeDispatch = <T extends AtividadeNomeAcoes>(
  type: T,
  payload: AtividadeAcoesContextoPayloads[T]
) => void;
