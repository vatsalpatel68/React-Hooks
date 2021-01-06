import React ,{ useState , useEffect }from 'react';
function UseEffect(){
    const[Counter,setCount]  = useState(0);
    
    
    useEffect(() => {
        console.log("useEffect is used.");
        return () =>{
            console.log("Component will unmount.");}
        },[Counter])
  
    return(
        <div>
            <button onClick={() => setCount(Counter+1)}>Click Me:{Counter}</button>
        </div>
    )
}
export default UseEffect;
