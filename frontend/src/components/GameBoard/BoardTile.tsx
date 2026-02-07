import { Paper, Center } from "@mantine/core";
import React from "react";

interface BoardTileProps {
    value: "x" | "o" | "";
    onClick: () => void;
}

const BoardTile: React.FC<BoardTileProps> = ({ value, onClick }) => {
    return (
        <Paper
            withBorder
            shadow="sm"
            style={{
                width: "100%",         // fill grid cell
                aspectRatio: "1 / 1",  // make it square
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                outline: "1px solid red", // debug
            }}
            onClick={onClick}
        >
            <Center style={{ fontSize: "3vw", minFontSize: 24 }}>
                {value === "x" && "X"}
                {value === "o" && "O"}
            </Center>
        </Paper>
    );
};

export default BoardTile;