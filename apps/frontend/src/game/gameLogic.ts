import type {BoardType, Move, PlayerType} from "../types";

export const makeMove = (board: BoardType, move: Move): BoardType => {
    const { row, col, player } = move;
    if (board[row][col]) return board;
    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = player;
    return newBoard;
};

export const checkWinner = (board: BoardType, move: Move): PlayerType | null => {
    const directions = [
        [-1, 0], // top
        [0, -1], // left
        [-1, -1], // top-left
        [-1, 1], // top-right
    ];

    const n = board.length;
    for (const [dx, dy] of directions) {
        let count = 1; // current move counts

        // check one direction
        for (let step = 1; step < n; step++) {
            const x = move.row + dx * step;
            const y = move.col + dy * step;
            if (x < 0 || x >= n || y < 0 || y >= n) break;
            if (board[x][y] === move.player) count++;
            else break;
        }

        // check opposite direction
        for (let step = 1; step < n; step++) {
            const x = move.row - dx * step;
            const y = move.col - dy * step;
            if (x < 0 || x >= n || y < 0 || y >= n) break;
            if (board[x][y] === move.player) count++;
            else break;
        }

        if (count >= n) return move.player;
    }

    return null;
};

