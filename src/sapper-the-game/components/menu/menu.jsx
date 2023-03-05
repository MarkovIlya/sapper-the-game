import React from 'react';
import PropTypes from 'prop-types';


import './menu.css';
import Timer from "../timer/timer";
import Smile from "../smile/smile";
import Counter from "../counter/counter";

const Menu = ({start, win, loss, time, countMines, countUnmarkedMines, dimension}) => (
    <div className="menu" style={ {width: dimension * 36} }>
        <Counter/>
        <Smile/>
        <Timer/>
    </div>
);

Menu.propTypes = {
    countUnmarkedMines: PropTypes.number,
    countMines: PropTypes.number,
    time: PropTypes.string,
    start: PropTypes.bool,
    win: PropTypes.bool,
    loss: PropTypes.bool,
}

Menu.defaultProps = {
    countUnmarkedMines: 40,
    countMines: 40,
    time: 0,
    start: false,
    win: false,
    loss: false,
}

export default Menu;