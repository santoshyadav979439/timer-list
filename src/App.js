import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import classes from './App.module.css';
import { useState } from 'react';

/**
 * This function contains main app 
 * @returns {React.Component} App
 */
const App = () => {
  const [timers, setTimers] = useState([
    {
      time: 3000,
      createdAt: '10/5/2022 9:38:59',
    },
  ]);
  const addTimer = (timeObject) => {
    const currentTimers = [...timers, timeObject];
    setTimers(currentTimers);
  };
  return (
    <div className={classes.container}>
      <LeftPanel timers={timers} />
      <RightPanel addTimer={addTimer} />
    </div>
  );
};

export default App;
