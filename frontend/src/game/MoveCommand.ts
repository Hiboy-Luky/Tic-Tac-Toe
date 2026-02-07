import type { BoardType, PlayerType } from "../types";
import {makeMove} from "./gameLogic.ts";

export class MoveCommand {
    row: number;
    col: number;
    player: PlayerType;

    constructor(row: number, col: number, player: PlayerType) {
        this.row = row;
        this.col = col;
        this.player = player;
    }

    execute(board: BoardType): BoardType {
        return makeMove(board, { row: this.row, col: this.col, player: this.player });
    }

    undo(board: BoardType): BoardType {
        const newBoard = board.map(r => [...r]);
        newBoard[this.row][this.col] = "";
        return newBoard;
    }
}
