import React from 'react';
import {useMemo,useState} from 'react';
const Child2 = React.memo(function({parentName, handleOnClick}){
    console.log("render child 2"); 
    const [counter,setCounter] = useState(1);

    const [name,setName] = useState("Luan");

    function getTotal(){
        console.log("get Total");
        return 1;
    }

    const a = useMemo(()=>{
        getTotal()
    },[])

    return <div>
        <button onClick={handleOnClick}>Child Counter Increment</button>
        <div>Child 2 {parentName} {a}</div>
    </div>
   
})

export default Child2;