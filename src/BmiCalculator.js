import { useState } from "react";
import "./App.css";
const BmiCalculator=()=>{
    const[weight,setWeight]=useState("");
    const[height,setHeight]=useState("");
    const[bmi,setBmi]=useState(null);
    const[status,setStatus]=useState("");

    const handleSubmit=()=>{
        if(height&&weight){
            const heightMeters=height/100;
            const bmivlaue=weight/(heightMeters*heightMeters);
            setBmi(bmivlaue.toFixed(2));
            if(bmivlaue<18.5){
                setStatus("UnderWeight");
            }
            else if(bmivlaue>=18.5 && bmivlaue<24.9){
                setStatus("Normal Weight");
            }
            else if(bmivlaue>=25&&bmivlaue<29.9){
                setStatus("OverWeight")
            }
            else{
                setStatus("Obese");
            }
        }
       
        else{
            setBmi(null);
            setStatus("")
        }
    }

    const handleClear=()=>{
            setHeight("");
            setWeight("");
             setBmi(null);
            setStatus("")
    }
    
    return(
        <>
        <div className="container">
            <div className="data-container">
                <div className="imageSec">
                    <img src="./image/download.jpeg" alt="bmi"/>
                </div>
                    <div className="contentSec">
                        <h2>Bmi Calculator</h2>
                        <label>Height(cm):</label>
                        <input type="text" value={height}  onChange={(e)=>setHeight(e.target.value)}/>
                        <label>Weight(kg):</label>
                        <input type="text"value={weight} onChange={(e)=>setWeight(e.target.value)}/>

                            <div className="buttonSec">
                                <button className="bmi" onClick={()=>handleSubmit()}>CalculatorBMI</button>
                                <button className="clear" onClick={()=>handleClear()}>Clear</button>
                            </div>
                            {bmi!==null&&(

                                <div className="status">
                                    <p>Your Bmi:{bmi}</p>
                                    <p>Status:{status}</p>

                                </div>
                            )}
                                
                        
                    </div>

            </div>
           

        </div>
        </>
    )
}

export default BmiCalculator;