import {CHANGE_MARK, GAME_OVER, OPEN_CELL, START_GAME} from "../../constants";

export const openCell = (id, gameOver) => ({
    type: OPEN_CELL,
    id,
    gameOver,
})

export const changeMark = id => ({
    type: CHANGE_MARK,
    id,
})

export const startGame = (id, countMines) => ({
    type: START_GAME,
    id,
    countMines,
})