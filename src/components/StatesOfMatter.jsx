import React, { useEffect, useState } from 'react'
import ice from "../assets/ice.jpg"
import water from "../assets/water.jpg"
import watervapour from "../assets/watervapour.jpg"

const StatesOfMatter = () => {
    const [temperature, setTemperature] = useState(24); 

    const IncreaseTemp = () =>{
        setTemperature(temperature + 10);
    }
    const DecreaseTemp = () =>{
        setTemperature(temperature - 10);
    }
    const ResetTemp = () =>{
        setTemperature(24);
    }

    const [state,setState] = useState({ state : "liquid", image: water})
    const currentState = ()=> {
        if (temperature > 100){
            setState({state: "gas", image: watervapour});
        }
        else if(temperature < 0){
            setState({state: "solid", image: ice});
        }
        else{
            setState({state: "liquid", image: water});
        }
    }

    useEffect(()=>{
        currentState();
    }, [temperature]);

  return (
    <>  
    <div>Temperature {temperature}</div>
    <button onClick={IncreaseTemp}>Increase Temperature</button>
    <button onClick={DecreaseTemp}>Decrease Temperature</button>
    <button onClick={ResetTemp}>Reset Temperature</button>
    <div>State: {state.state}</div>
    <img src={state.image} alt={state.state} height={50} width={50}/>
    <div>State {state.state}</div>
    </>
  )
}

export default StatesOfMatter;
