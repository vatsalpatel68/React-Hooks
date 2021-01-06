import React ,{useState,useEffect} from 'react';
import axios from 'axios';

function DataFetching(){
    const [posts,func] = useState([]);


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(obj=> {
            console.log(obj);
            func(obj.data);
        },)
      .catch(err =>{
        console.log(err);
      })
    },[])

    return(
        <div>
            <ul>
                {
                    posts.map(items => (
                    <li key={items.id}>{items.title}</li>
                    ))
                }
            </ul>
            </div>
    )

}

export default DataFetching;