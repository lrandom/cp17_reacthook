import Child from './components/Child';
import Child2 from './components/Child2';
import { useEffect, useReducer, useRef, useState, useCallback } from "react"
function App() {
  const [counter,setCounter] = useState(1);

  const handleOnClick = useCallback(()=>{
    console.log("X");
  },[]);


  return (
    <div>
       <button onClick={()=>{setCounter(counter+1)}}>Parent increment counter</button>
       <Child2 parentName={'Luan'} handleOnClick={handleOnClick}></Child2>
    </div>
  );
}

export default App;
