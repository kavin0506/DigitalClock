import { useEffect, useState } from "react";
import "./digital.css";

function Digital(){

    const[currentTime,setCurrentTime]=useState(new Date());



     useEffect(()=>{
        const time=setInterval(()=>{
            setCurrentTime(new Date())
        },1000)
        
         return()=>   clearInterval(time)
     },[])
   


    const digit=(number)=>{
        return number<10?`0${number}`:number
    }
    const timeFormat=(hour)=>{

      return  hour===0?12:hour>12?hour-12:hour
    }

    const dayFormat=(date)=>{
  const day={weekday:"long",year:"numeric",month:"long",day:"numeric"}
     return date.toLocaleDateString(undefined,day)
    }

    return(

        <>
        <div className="clockSec">
            <h1>Digital Clock</h1>
            <div className="timeSec">{digit(timeFormat(currentTime.getHours()))} : {digit(currentTime.getMinutes())} : {digit(currentTime.getSeconds())}</div>
            <p className="dataSec">{dayFormat(currentTime)}</p>

        </div>
        </>
    )
}

export default Digital;