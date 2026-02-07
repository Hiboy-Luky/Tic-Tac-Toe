export type PlayerType = "x" | "o";
export type CellValueType = PlayerType | "";
export type BoardType = CellValueType[][];
export type Move = { row: number; col: number; player: PlayerType };
