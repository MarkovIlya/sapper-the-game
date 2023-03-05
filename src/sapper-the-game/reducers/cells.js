import { load } from 'redux-localstorage-simple';
import {CHANGE_MARK, GAME_OVER, OPEN_CELL, RESTART_GAME, SHOW_MINES, START_GAME} from "../../constants";
//
// let Cells = load({ namespace: 'sapper' });
//
// if (!Cells || !Cells.cells || !Cells.cells.length) {
//     Cells = {
//         cells: [],
//     }
// }



const CELLS = [
    {
        id: '0-0',
        hasMine: false,
        isClicked: false,
        isOpened: false,
        isMarked: false,
        isMaybeMarked: false,
        minesAround: 0,
    },
    {
        id: '0-1',
        hasMine: false,
        isClicked: false,
        isOpened: false,
        isMarked: false,
        isMaybeMarked: false,
        minesAround: 0,
    },
    {
        id: '0-2',
        hasMine: false,
        isClicked: false,
        isOpened: false,
        isMarked: false,
        isMaybeMarked: false,
        minesAround: 0,
    },
    {
        id: '1-0',
        hasMine: false,
        isClicked: false,
        isOpened: false,
        isMarked: false,
        isMaybeMarked: false,
        minesAround: 0,
    },
    {
        id: '1-1',
        hasMine: false,
        isClicked: false,
        isOpened: false,
        isMarked: false,
        isMaybeMarked: false,
        minesAround: 0,
    },
    {
        id: '1-2',
        hasMine: false,
        isClicked: false,
        isOpened: false,
        isMarked: false,
        isMaybeMarked: false,
        minesAround: 0,
    },
    {
        id: '2-0',
        hasMine: false,
        isClicked: false,
        isOpened: false,
        isMarked: false,
        isMaybeMarked: false,
        minesAround: 0,
    },
    {
        id: '2-1',
        hasMine: false,
        isClicked: false,
        isOpened: false,
        isMarked: false,
        isMaybeMarked: false,
        minesAround: 0,
    },
    {
        id: '2-2',
        hasMine: true,
        isClicked: false,
        isOpened: false,
        isMarked: false,
        isMaybeMarked: false,
        minesAround: 0,
    },

];

const createCells = (dimension = 16) => {

    const cells = [];
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            cells.push({
                id: `${i}-${j}`,
                hasMine: false,
                isClicked: false,
                isOpened: false,
                isMarked: false,
                isMaybeMarked: false,
                minesAround: 0,
            })
        }

    }
    return cells;
}

const arrayRandElement = (arr) => {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

const cells = (state = createCells(3), { type, id, countMines= 2, gameOver, winGame, win, loss}) => {
    let count = 3*3 - countMines;
    let countOpened = 0;
    switch (type) {
        case OPEN_CELL:
            return [...state].map(cell => {
                if (cell.id === id) {
                    if (!cell.isOpened && !cell.isMarked && !loss ) {
                        cell.isOpened = true;
                        cell.isClicked = true;
                    }
                    if (cell.isClicked && cell.hasMine) {
                        gameOver();
                        console.log('Вы проиграли')
                        prompt('Вы проиграли')
                    }
                    state.map(cel => {
                        if (cel.isOpened && !cel.hasMine) {
                            countOpened++;
                        }
                    })
                    if (countOpened === count) {
                        winGame();
                        console.log('Вы победили')
                        prompt('Вы победили')
                    } else {
                        console.log(countOpened);
                        countOpened = 0;
                    }

                }
                return cell;
            });
        case CHANGE_MARK:
            return [...state].map(cell => {
                if (cell.id === id) {
                    if (!cell.isOpened) {
                        if (cell.isMarked) {
                            cell.isMarked = false;
                            cell.isMaybeMarked = true;
                        } else if (cell.isMaybeMarked) {
                            cell.isMaybeMarked = false;
                        } else {
                            cell.isMarked = true;
                        }
                    }
                }
                return cell;
            });
        case START_GAME:
            [...state].map(cell => {
                if (cell.id === id) {
                    for (let i = 0; i < countMines; ) {
                        let mineCell = arrayRandElement(state);
                        if (!mineCell.hasMine) {
                            mineCell.hasMine = true;
                            i++;
                        }
                    }
                }
            });
            return state;
        case RESTART_GAME:
            state = createCells(3);
            return state;
        default:
            return state;
    }
}

export default cells;