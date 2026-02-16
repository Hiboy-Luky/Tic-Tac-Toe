import type { BoardType, PlayerType } from "../types";
import { checkWinner } from "./gameLogic.ts";
import type {MoveCommand} from "./MoveCommand.ts";

export type GameState = {
    board: BoardType;
    currentPlayer: PlayerType;
    winner: PlayerType | null;
}

type GameAction =
    | {
    type: "MOVE_RESOLVED";
    payload: {
        board: BoardType;
        command: MoveCommand;
    };
}
    | { type: "RESET" };


export const initialBoard: BoardType = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

export function gameReducer(state: GameState, action: GameAction): GameState {
    switch (action.type) {
        case "MOVE_RESOLVED": {
            const { board, command } = action.payload;

            const winner = checkWinner(board, {
                row: command.row,
                col: command.col,
                player: command.player
            });

            return {
                board,
                currentPlayer: winner
                    ? state.currentPlayer
                    : state.currentPlayer === "x"
                        ? "o"
                        : "x",
                winner: winner ?? null
            };
        }

        case "RESET":
            return {
                board: initialBoard,
                currentPlayer: "x",
                winner: null
            };

        default:
            return state;
    }
}

