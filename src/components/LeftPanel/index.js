import React from 'react';
import PropTypes from 'prop-types';
import TimeBox from '../common/TimeBox';
import classes from './style.module.css';

/**
 * This function contains list of timers
 * @param {Function} removeTimer
 * @param {Array} array of timers
 * @returns {React.Component}   Left panel of application
 */
const LeftPanel = ({ removeTimer, timers }) => {
  return (
    <div className={classes['left-panel']}>
      {timers.map((timer) => (
        <TimeBox
          id={timer.createdAt}
          key={timer.createdAt}
          time={timer.time}
          createdAt={timer.createdAt}
          removeTimer={removeTimer}
        />
      ))}
    </div>
  );
};
LeftPanel.prototype = {
  removeTimer: PropTypes.func.isRequired,
  timers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default LeftPanel;
