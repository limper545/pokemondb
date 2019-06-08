export interface Pokemon {
  count: number;
  next: string;
  previous?: null;
  results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
  name: string;
  url: string;
}
