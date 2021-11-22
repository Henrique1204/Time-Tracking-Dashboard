interface Timeframe {
  current: number;
  previous: number;
}

export type TimeframeKeys = 'daily' | 'weekly' | 'monthly';

export type TitleAtividade =
  | 'work'
  | 'play'
  | 'study'
  | 'exercise'
  | 'social'
  | 'self_care';

interface AtividadeItem {
  title: TitleAtividade;
  timeframes: Timeframe;
}

export interface AtividadeContextState {
  atividades: AtividadeItem[];
  timeframeAtivo: TimeframeKeys | null;
}

export enum AtividadeActionName {
  SET_TIMEFRAME = 'SET_TIMEFRAME',
  SET_ATIVIDADES = 'SET_ATIVIDADES',
}

export interface AtividadeContextActionPayloads {
  [AtividadeActionName.SET_TIMEFRAME]: TimeframeKeys;
  [AtividadeActionName.SET_ATIVIDADES]: AtividadeItem[];
}

export interface AtividadeContextAction {
  type: AtividadeActionName;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export type AtividadeDispatch = <T extends AtividadeActionName>(
  type: T,
  payload: AtividadeContextActionPayloads[T]
) => void;
