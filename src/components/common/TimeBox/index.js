import React, { useEffect, useRef, useState } from 'react';
import classes from './style.module.css';

/**
 * This component contains timer and cross icon to close timer
 * @param {number} time in miliseconds
 * @param {string} createdAt creation time of timer
 * @param {string} id id of timer
 * @returns {React.Component} TimeBox
 */
const TimeBox = ({ time, createdAt, id }) => {
  const [currentTime, setCurrentTime] = useState(time);
  const ref = useRef(null);
  const boxRef = useRef(null);
  const close = () => {
    clearInterval(ref);
    boxRef.current.remove();
  };
  useEffect(() => {
    ref.current = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(ref.current);
          boxRef.current.remove();
          return 0;
        }
      });
    }, 10);
  }, []);
  const formatTime = (time) => {
    const sTime = time.toString();
    let s = '';
    let count = 0;
    for (let char of sTime) {
      if (count === 2) s += ',' + char;
      else s += char;
      count++;
    }
    return s;
  };

  return (
    <div className={classes['time-box']} ref={boxRef}>
      <span onClick={() => close(id)} className={classes.cross}>
        X
      </span>
      <span className={classes.time}>{formatTime(currentTime)}</span>
      <span className={classes['careted-at']}>{createdAt}</span>
    </div>
  );
};

export default TimeBox;
