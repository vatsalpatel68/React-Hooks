import React,{ useState } from 'react';

function UseStateDemo(){
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);


    return(
        <div>
            <button onClick ={() => setCount1(count1+1)}>Click1: {count1} </button>
            <button onClick ={() => setCount2(pr => pr+1)}>Click2: {count2} </button>
        </div>
    )
}

export default UseStateDemo;