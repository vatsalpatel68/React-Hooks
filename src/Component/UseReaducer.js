import React , { useReducer } from 'react';

function UseReducer(){
    var InitialCondition = 0;
     var [counter,setCount] = useReducer(reducer,InitialCondition);
     
    
     function reducer(val,command){
         var newval;
         switch(command){
             case 'increment': return newval = val+1;
             case 'decrement': return newval = val-1;
             case 'reset': return InitialCondition;
         }
         return newval
     }
     return(
        <div>
            <button onClick={() => setCount('increment')}>INCREMENT</button>
            <button onClick={() => setCount('decrement')}>DECREMENT</button>
            <button onClick={() => setCount('reset')}>RESET</button>
            <br/>
            <h1>{counter}</h1>
        </div>
    )
}

export default UseReducer;