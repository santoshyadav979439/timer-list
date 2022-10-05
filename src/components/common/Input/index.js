import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.module.css';

const Input = ({ value, onchangeHandler, type, isRequired = false }) => {
  return (
    <input
      className={classes.input}
      value={value}
      onChange={onchangeHandler}
      type={type}
      required={isRequired}
    />
  );
};
Input.prototype = {
  value: PropTypes.string.isRequired,
  onchangeHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};
export default Input;
