import React , {useState , useEffect} from 'react';
import axios from 'axios';
function AxiosExample(){
    
    const details =[{
        name : 'vatsal',
        age :22
    }]
    
    useEffect(() => {
        axios.post("https://jsonplaceholder.typicode.com/posts",details)
        .then(content => {
                console.log(content)
        })
        .catch(err => {
            console.log(err);
        })
    })

    return(
        <div>
            null   
            </div>
    )
}

export default AxiosExample;