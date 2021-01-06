import React , {useState , useEffect ,useReducer} from 'react';
import axios from 'axios';
function AxiosExample2(){
   
    const [data,setdata] = useState([])
    useEffect(() => {
        axios.get("")
        .then(content => {
               setdata(content)
        },[])
        .catch(err => {
            console.log(err);
        })
    })

    return(
        <div>
                {data}
            </div>
    )
}

export default AxiosExample2;