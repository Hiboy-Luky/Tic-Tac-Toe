import React, { useState } from "react";
import BoardTile from "./BoardTile.tsx";

const initialBoard: ("x" | "o" | "")[][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

const GameBoard: React.FC = () => {
    const [board, setBoard] = useState(initialBoard);

    const handleClick = (row: number, col: number) => {
        setBoard((prev) => {
            const newBoard = prev.map((r) => [...r]);
            if (!newBoard[row][col]) newBoard[row][col] = "x";
            return newBoard;
        });
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center", // horizontal centering
                alignItems: "center",     // vertical centering
                height: "100vh",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))", // 3 equal columns
                    gap: "8px",
                    width: "100%",        // take full width of parent
                    maxWidth: "400px",    // optional max width
                }}
            >
                {board.map((row, r) =>
                    row.map((cell, c) => (
                        <BoardTile
                            key={`${r}-${c}`}
                            value={cell}
                            onClick={() => handleClick(r, c)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default GameBoard;