import React, {useMemo, useState} from "react";
import GameBoard from "../components/GameBoard/GameBoard.tsx";
import type {BoardType, PlayerType} from "../types";
import {LocalExecutor} from "../game/moveExecutor.ts";
import {MoveCommand} from "../game/MoveCommand.ts";
import {checkWinner, initialBoard} from "../game/gameLogic.ts";

type GameState = {
    board: BoardType,
    currentPlayer: PlayerType,
}

const GamePage: React.FC = () => {
    const [game, setGame] = useState<GameState>({
        board: initialBoard,
        currentPlayer: "x"
    });

    const executor = useMemo(() => new LocalExecutor(), []);
    const handleTileClick = async (row: number, col: number) => {
        const command = new MoveCommand(row , col, game.currentPlayer);
        const newBoard = await executor.executeMove(game.board, command);

        const winner = checkWinner(newBoard, {row: row, col: col, player: game.currentPlayer});

        setGame(prev => ({
            board: newBoard,
            currentPlayer: winner ? prev.currentPlayer : prev.currentPlayer === "x" ? "o" : "x"
        }));

        if (winner) {
            // TODO win logic
            alert(`${winner.toUpperCase()} wins!`);
            return;
        }
    };

    return <GameBoard board={game.board} onTileClick={handleTileClick} />;
};

export default GamePage;