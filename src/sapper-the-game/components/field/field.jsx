import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../cell/cell';

import './field.css';

const Field = ({ cells, dimension, openCell, changeMark, start, startGame, countMines, gameOver, loss, win, winGame}) => (
    <div className="field-border">
        <div className="field" style={ {height: dimension*16, width: dimension*16} }>
            {cells.map(({id, hasMine, isClicked, isOpened, isMarked, isMaybeMarked, minesAround }) => (
                <Cell
                    id={id}
                    key={id}
                    hasMine={hasMine}
                    isClicked={isClicked}
                    isOpened={isOpened}
                    isMarked={isMarked}
                    isMaybeMarked={isMaybeMarked}
                    minesAround={minesAround}
                    openCell={openCell}
                    changeMark={changeMark}
                    start={start}
                    startGame={startGame}
                    countMines={countMines}
                    gameOver={gameOver}
                    loss={loss}
                    win={win}
                    winGame={winGame}
                />
            ))}
        </div>
    </div>
);

Field.propTypes = {
    cells: PropTypes.array,
    dimension: PropTypes.number,
}

Field.defaultProps = {
    tasksList: [],
    dimension: 16,
}

export default Field;