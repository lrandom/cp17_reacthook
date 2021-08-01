import axios from "axios";
import { useState } from "react";

function App() {
  const [content,setContent] = useState('');
  const submit = (evt)=>{
    evt.preventDefault();
    axios.post('http://localhost/submitData.php',{content:content}).then(()=>{
      alert("Submit thành công");
    }).catch((err)=>{
      alert("Submit thất bài");
    })
  }
  return (
    <div>
      <form onSubmit={(evt)=>submit(evt)}>
        <input type="text" onChange={(evt)=>{setContent(evt.target.value)}}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
