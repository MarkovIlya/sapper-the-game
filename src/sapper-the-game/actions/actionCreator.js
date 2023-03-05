import {CHANGE_MARK, OPEN_CELL, RESTART_GAME, START_GAME} from "../../constants";

export const openCell = (id, gameOver, loss) => ({
    type: OPEN_CELL,
    id,
    gameOver,
    loss
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

export const restartGame = () => ({
    type: RESTART_GAME,
})