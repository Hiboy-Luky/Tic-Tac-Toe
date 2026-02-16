import React, {useMemo, useReducer, useEffect, useState} from "react";
import GameBoard from "../components/GameBoard/GameBoard.tsx";
import {LocalExecutor, ServerExecutor} from "../game/moveExecutor.ts";
import {gameReducer, initialBoard} from "../game/gameReducer.ts";
import {MoveCommand} from "../game/MoveCommand.ts";
import {Switch, Group, Stack} from "@mantine/core";

const GamePage: React.FC = () => {
    const [game, dispatch] = useReducer(gameReducer, {
        board: initialBoard,
        currentPlayer: "x",
        winner: null
    });

    const [isSinglePlayer, setIsSinglePlayer] = useState(false);
    const executor = useMemo(() => {
        return isSinglePlayer ? new ServerExecutor() : new LocalExecutor();
    }, [isSinglePlayer]);

    useEffect(() => {
        if (game.winner) {
            alert(`${game.winner.toUpperCase()} wins!`);
        }
    }, [game.winner])

    const handleTileClick = async (row: number, col: number) => {
        if (game.winner) return;

        const command = new MoveCommand(row, col, game.currentPlayer);

        const newBoard = await executor.executeMove(game.board, command);

        dispatch({
            type: "MOVE_RESOLVED",
            payload: {
                board: newBoard,
                command
            }
        });
    };

    const handleModeToggle = (checked: boolean) => {
        setIsSinglePlayer(checked);
        dispatch({ type: "RESET" });
    };

    return <>
        <Stack>
            <Group>
                <Switch
                    label={isSinglePlayer ? "1P (Bot)" : "2P"}
                    checked={isSinglePlayer}
                    onChange={(event) => handleModeToggle(event.currentTarget.checked)}
                />
            </Group>

            <GameBoard board={game.board} onTileClick={handleTileClick} />
        </Stack>
    </>
};

export default GamePage;