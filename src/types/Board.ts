type FixedSizeArray<N extends number, T> = N extends 0 ? never[] : {
  0: T;
  length: N;
} & Array<T>;

export type Mark = "o" | "x";
export type Cell = Mark | " ";
export type Board = FixedSizeArray<9, Cell>;
