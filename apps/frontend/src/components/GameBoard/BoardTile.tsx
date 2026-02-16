import { Paper } from "@mantine/core";
import React from "react";
import type {CellValueType} from "../../types";
import { Image } from '@mantine/core';
import circle from "../../assets/circle.svg";
import cross from "../../assets/cross.svg";
//import { IconCircle, IconX } from '@tabler/icons-react';

interface BoardTileProps {
    value: CellValueType;
    onClick: () => void;
}

const getTileStyle = (cellValue: CellValueType) => {
    switch (cellValue) {
        case "o":
            return <Image src={circle} alt="Logo" />
            //return <IconCircle />
        case "x":
            return <Image src={cross} alt="Logo" />
            //return <IconX />
        default:
            return <></>
    }

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
                userSelect: "none",
            }}
            onClick={onClick}
        >
            {getTileStyle(value)}
        </Paper>
    );
};

export default BoardTile;