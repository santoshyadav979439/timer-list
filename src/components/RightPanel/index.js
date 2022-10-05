import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../common/Input';
import classes from './style.module.css';

/**
 * This function contains form to capture timer
 * @param {Funtion} addTimer
 * @returns {React.Component} RightPanel
 */
const RightPanel = ({ addTimer }) => {
  const [time, setTime] = useState('');
  const onchangeHandler = (event) => {
    setTime(event.target.value);
  };
  const add = (event) => {
    event.preventDefault();
    const current = new Date();
    const date = current.toLocaleDateString();
    const t = current.toLocaleTimeString();
    addTimer({
      time: time,
      createdAt: `${date} ${t.split(' ')[0]}`,
    });
    setTime('');
  };
  return (
    <form className={classes['right-panel']} onSubmit={add}>
      <h5>New Timer</h5>
      <Input
        value={time}
        onchangeHandler={onchangeHandler}
        type='number'
        isRequired={true}
      />
      <button>Add</button>
    </form>
  );
};
RightPanel.prototype = {
  addTimer: PropTypes.func.required,
};
export default RightPanel;
