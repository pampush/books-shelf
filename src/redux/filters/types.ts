export interface FiltersState {
  readonly category: string;
  readonly sortBy: string;
  readonly text: string;
}

export enum FiltersActionTypes {
  SET_CATEGORY = '@@filters/SET_CATEGORY',
  SET_SORTBY = '@@filters/SET_SORTBY',
  SET_TEXT = '@@filters/SET_TEXT',
}
