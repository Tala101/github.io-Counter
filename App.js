import React from "react";

export default function App (){
     const [count, setCount]= React.useState(0)
     
       /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     
     callback function 
     Function Add(){
     setCount(function(oldValue){
         return oldValue - 1
     })
     };
     
     or
     function Add(){
     setCount(count +1)
     }
     
     
     
     
     */
     
     function Decrease() {
         setCount(prevCount => prevCount - 1)
         }
         
     
      function Increase() {
         setCount(prevCount => prevCount + 1)
            
         }
            
    
    return (
        <div>
            <h1 className="title">Counter</h1>
            <div className="counter">
                <button className="dec" onClick={Decrease}>-</button>
                <div className="counter-screen"><h1>{count}</h1></div>
                <button className="inc" onClick={Increase}>+</button>     
            </div>
        </div>
    )
    
}