import React from 'react';
import PropTypes from 'prop-types';

import './cell.css';

const Cell = ({id, hasMine, isClicked, isOpened, isMarked, isMaybeMarked, minesAround, openCell, changeMark, start, startGame, countMines, gameOver }) => (
    <i onMouseUp={(event) => {
        if (event.button === 0) {
            if (!start) {
                startGame(id, countMines);
            }
            openCell(id, gameOver);

        } else {
            changeMark(id)
        }
    }}
       className={isClicked && hasMine ? 'cell opened_mine_cell' :
        !isOpened && isMarked  ? 'cell marked_cell' :
           !isOpened && isMaybeMarked ? 'cell maybe_marked_cell' :
                !isOpened ? 'cell unopened_cell' :
                    isMaybeMarked ? 'cell maybe_marked_opened_cell' :
                            hasMine ? 'cell mine_cell' :
                                !hasMine && isMarked ? 'cell opened_marked_cell' :
                                    'cell opened_cell' }
    ></i>
);

Cell.propTypes = {
    id: PropTypes.string,
    hasMine: PropTypes.bool,
    isClicked: PropTypes.bool,
    isOpened: PropTypes.bool,
    isMarked: PropTypes.bool,
    isMaybeMarked: PropTypes.bool,
    minesAround: PropTypes.number,
    openCell: PropTypes.func,
    changeMark: PropTypes.func,
}



Cell.defaultProps = {
    id: '00',
    hasMine: false,
    isClicked: false,
    isOpened: false,
    isMarked: false,
    isMaybeMarked: false,
    minesAround: 0,
    openCell: () => {},
    changeMark: () => {},
}

export default Cell;
