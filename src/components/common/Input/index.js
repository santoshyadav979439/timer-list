import React from 'react';
import classes from './style.module.css';

const Input = ({ time, onchangeHandler, type, isRequired = false }) => {
  return (
    <input
      className={classes.input}
      value={time}
      onChange={onchangeHandler}
      type={type}
      required={isRequired}
    />
  );
};

export default Input;
