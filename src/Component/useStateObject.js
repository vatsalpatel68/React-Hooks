import React , { useState } from 'react';

function UseStateObject(){
    const [names,setNames] = useState({firstName : '',lastName : ''});
    
    return(
        <div>
            <input type ="text" value={names.firstName} onChange={e => setNames({...names,firstName : e.target.value})}></input>
            <br />
            <input type ="text" value={names.lastName} onChange={e => setNames({...names,lastName : e.target.value})}></input>

            <h1>the first name is :{names.firstName}</h1>
            <h2>the last name is :{names.lastName}</h2>
        </div>
    )
}

export default UseStateObject;
