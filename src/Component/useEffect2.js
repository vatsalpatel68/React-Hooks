import React ,{ useState ,  useEffect } from 'react';

import UseEffect from './useEffect.js';

function UseEffect2(){
    const[status,setStatus] = useState(true);
    

    return(
        <div>
            <button onClick = {() => {setStatus(!status)}}>Click for Toggle</button>
            {status?<UseEffect />:null}
        </div>
    )
}

export default UseEffect2;