import { Paper } from "@mantine/core";
import React from "react";
import type {CellValueType} from "../../types";

interface BoardTileProps {
    value: CellValueType;
    onClick: () => void;
}

const BoardTile: React.FC<BoardTileProps> = ({ value, onClick }) => {
    return (
        <Paper
            withBorder
            shadow="sm"
            style={{
                width: "100%",
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                outline: "1px solid red",
                fontSize: "clamp(24px, 3vw, 64px)",
                userSelect: "none",
            }}
            onClick={onClick}
        >
            {value?.toUpperCase()}
        </Paper>


    );
};

export default BoardTile;