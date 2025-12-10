import { useState } from "react";

// CounterDemo.tsx (and similar for others)
function CounterDemo() {

    const [counter, setcounter] = useState(0);

    const handleClickPlus = () => {
        setcounter(counter + 1);

    };


    const handleClickMinus = () => {
        setcounter(counter - 1);

    };


    const handleClickReset = () => {
        setcounter(0);

    };

    return (
            <div>
            <div className="container">
                <h2 className="centered-text">Current counter value : {counter}</h2>
            </div>            
            <div className="container space-between" >
            <button className="roundedButton item" onClick={handleClickMinus}>decrement (-)</button>
            <button className="roundedButton  item" onClick={handleClickReset}>reset (0) </button>
            <button className="roundedButton  item" onClick={handleClickPlus}>increment (+)</button> 
            </div>
        </div>
    );
}

export default CounterDemo;