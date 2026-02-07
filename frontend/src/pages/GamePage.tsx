import React, { useState } from "react";
import GameBoard from "../components/GameBoard/GameBoard.tsx";
import type {BoardType, PlayerType} from "../types";
import {LocalExecutor} from "../game/moveExecutor.ts";
import {MoveCommand} from "../game/MoveCommand.ts";
import {checkWinner} from "../game/gameLogic.ts";

const GamePage: React.FC = () => {
    const [board, setBoard] = useState<BoardType>([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

    const [currentPlayer, setCurrentPlayer] = useState<PlayerType>("x");

    const executor = new LocalExecutor();
    const handleTileClick = async (row: number, col: number) => {
        const command = new MoveCommand(row , col, currentPlayer);
        const newBoard = await executor.executeMove(board, command);
        setBoard(newBoard);

        const winner = checkWinner(newBoard, {row: row, col: col, player: currentPlayer});
        if (winner) {
            // TODO win logic
            alert(`${winner.toUpperCase()} wins!`);
            return;
        }

        setCurrentPlayer(currentPlayer === "x" ? "o" : "x")
    };

    return <GameBoard board={board} onTileClick={handleTileClick} />;
};

export default GamePage;