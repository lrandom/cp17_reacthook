import { useEffect, useReducer,useCallback, useRef, useState,useMemo } from "react"
import React from "react";

const Child = React.memo(function Child(props){
   const {name} = props;
   const [counter, setCounter] = useState(0);
   //const [name,setName]=useState("NIIT");
   //let number = 10;
   const number  = useRef(10);
   const input = useRef(null);
   const [numbers,setNumbers] = useState(1);
  //spread operator - rest 

   console.log("Re render")
   useEffect(()=>{
       console.log("TEST");
       number.current = number.current + 10;
       console.log(number.current);
       input.current.focus();
       //setCounter(counter+1);
   })


   function getTotal(){
      console.log('get total');
      return 1;
   };

   const a = useCallback(function(){
     console.log("TE");
     return 1;
   },[]);


   /*const [counter, dispatchCounter] = useReducer((state,action)=>{
        if(action.type === "TANG"){
          return state = state+1;
        }

        if(action.type === "GIAM"){
          return state = state-1;
        }
   },0);
 */
 
   

   return <div>
       {/*<button onClick={()=>{dispatchCounter({type:"TANG"})}}>+</button>
       <button onClick={()=>{dispatchCounter({type:"GIAM"})}}>-</button>*/}
       <button onClick={()=>{setNumbers(numbers+1)}}>TEst</button>
    {numbers}
    {a()}
       <input type="text" ref={input}/>
   </div>
})

export default Child;