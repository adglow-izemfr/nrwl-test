export interface httpState {
  url: string;
  state: httpProgressStates;
}

export type httpProgressStates = 'START' | 'END';
