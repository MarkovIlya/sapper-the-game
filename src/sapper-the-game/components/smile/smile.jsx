import React from 'react';
import PropTypes from 'prop-types';


import './smile.css';

const Smile = ({start, win, loss}) => (
    <div className={!start ? "smile" : 'smile_pressed'}>
    </div>
);

Smile.propTypes = {
    start: PropTypes.bool,
    win: PropTypes.bool,
    loss: PropTypes.bool,
}

Smile.defaultProps = {
    start: false,
    win: false,
    loss: false,
}

export default Smile;