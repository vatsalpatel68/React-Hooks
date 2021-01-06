import React , { useRef , useEffect }  from 'react';

const RefDemo = () => {
    const  refd  = React.useRef();

    useEffect(() => {
        refd.current.focus();
    },[])
    return(
        <input type= 'text ' ref = {refd}/>
    )
}


export default RefDemo