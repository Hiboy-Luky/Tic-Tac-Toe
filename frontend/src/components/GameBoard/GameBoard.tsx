import React from "react";
import BoardTile from "./BoardTile";
import { Box } from "@mantine/core";
import type { BoardType } from "../../types";

interface GameBoardProps {
    board: BoardType;
    onTileClick: (row: number, col: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ board, onTileClick }) => {
    return (
        <Box
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 8,
                maxWidth: 400,
                margin: "40px auto",
            }}
        >
            {board.map((row, r) =>
                row.map((cell, c) => (
                    <BoardTile
                        key={`${r}-${c}`}
                        value={cell}
                        onClick={() => onTileClick(r, c)}
                    />
                ))
            )}
        </Box>
    );
};

export default GameBoard;