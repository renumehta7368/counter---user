import React, { useState } from "react"
function Counter (){
    //not use let alwes use const
    const [counter, setCounter] = useState(0)
    console.log(counter)
    function increment(){
        //with the help of setcounter it increment the number
        setCounter(counter + 1)
        // both work same but in this setcounter if we write it two times it gives us 1 2 4 6 8 10 12 so on

        //setCounter ((previouseCounter) => previouseCounter + 1)
                // counter++
               // counter = counter+1 
               //we can not use this because react will not re render the state

       
    }
    return(
        <div>
            <h1>Counter: {counter} </h1>
       
        <button onClick={increment}>+</button>
        <button >-</button>
        
    </div>
    )}
export default Counter

