import React from 'react';
import {createcontext} from '../App.js';
function Component3()
{
    return(
        <div>
            <createcontext.consumer>
            {
            data => {
                return <h1> Hello world from {data}</h1>
            }
            }
            </createcontext.consumer>
        </div>
    )
}

export default Component3;