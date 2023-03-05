import React from 'react';
import PropTypes from 'prop-types';


import './timer.css';

const Timer = ({time}) => (
    <div className="timer">
        {time}
    </div>
);

Timer.propTypes = {
    time: PropTypes.string,
}

Timer.defaultProps = {
    time: 0,
}

export default Timer;