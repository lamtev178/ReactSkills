import React, {useState, useContext} from 'react';
import {themeContext} from './context'

function Time(){  
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const {theme} = useContext(themeContext)
  setInterval(()=>{setTime(new Date().toLocaleTimeString())}, 1000)
  return(
    <div className={`container container-${theme}`}>
      <div className={`lolo ${theme}`}>
        <h1>Текущее время : {time}</h1>
      </div>
      <div className='stiky'>
        <h1>Current Time</h1>
      </div>
    </div>
  )
}

export default Time