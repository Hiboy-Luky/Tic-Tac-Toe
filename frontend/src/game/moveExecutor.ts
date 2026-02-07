import type { BoardType } from "../types";
import { MoveCommand } from "./MoveCommand";

export interface MoveExecutor {
    executeMove(board: BoardType, command: MoveCommand): Promise<BoardType>;
}

export class LocalExecutor implements MoveExecutor {
    async executeMove(board: BoardType, command: MoveCommand): Promise<BoardType> {
        return command.execute(board);
    }
}

export class ServerExecutor implements MoveExecutor {
    async executeMove(board: BoardType, command: MoveCommand): Promise<BoardType> {
        const response = await fetch("todo/move", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ row: command.row, col: command.col, player: command.player, board }),
        });
        const data = await response.json();
        return data.board;
    }
}
