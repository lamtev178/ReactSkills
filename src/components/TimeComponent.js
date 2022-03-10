import React, {useState} from 'react';

function Time(){  
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  setInterval(()=>{setTime(new Date().toLocaleTimeString())}, 1000)
  return(
    <div className='container'>
      <div className='time-component'>
        <h1>Текущее время : {time}</h1>
      </div>
      <div className='stiky'>
        <h1>Current Time</h1>
      </div>
    </div>
  )
}

export default Time