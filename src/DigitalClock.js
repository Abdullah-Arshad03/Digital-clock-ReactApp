
import React , {useState} from 'react';


const DigitalClock = () =>{
  
  let Time = new Date().toLocaleTimeString();
  let [currTime , SetTime] = useState(Time) // Array  Destructuring

 
  setInterval(() => {
    let newTime = new Date().toLocaleTimeString();
    SetTime(newTime);
  }, 1000);
 
  return(
    <>
       <div className="clock">
         <h1 className='time'>  {currTime} </h1>
        <p className='pak-time' >Pakistan Standard Times (PST) </p>
        </div>
         </>   
  );
};

export {DigitalClock};
