import React from 'react';
import PropTypes from 'prop-types';


import './counter.css';

const Counter = ({countMines, countUnmarkedMines}) => (
    <div className="counter">
        {countUnmarkedMines}
    </div>
);

Counter.propTypes = {
    countMines: PropTypes.number,
    countUnmarkedMines: PropTypes.number,
}

Counter.defaultProps = {
    countMines: 40,
    countUnmarkedMines: 40,
}

export default Counter;