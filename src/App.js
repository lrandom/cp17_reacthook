import axios from "axios";
import { useState } from "react";

function App() {

  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [address,setAddress] =useState('');
  const [fullname,setFullname] = useState('');
  const [password,setPassword]=useState('');
  const submit = (evt)=>{
    evt.preventDefault();
    const data = {
      email,
      fullname,
      password,
      phone,
      address
    }
    axios.post('http://localhost/cp17_test/signup.php',
    data).then(()=>{
      alert("Submit thành công");
    }).catch((err)=>{
       //console.log(err.response.data);
       alert(err.response.data.failed);
    })
  }
  return (
    <div>
      <form onSubmit={(evt)=>submit(evt)}>
        <input type="text" onChange={(evt)=>{setEmail(evt.target.value)}} placeholder="email"/>
        <input type="text" onChange={(evt)=>{setAddress(evt.target.value)}} placeholder="address"/>
        <input type="text" onChange={(evt)=>{setPassword(evt.target.value)}} placeholder="password"/>
        <input type="text" onChange={(evt)=>{setPhone(evt.target.value)}} placeholder="phone"/>
        <input type="text" onChange={(evt)=>{setFullname(evt.target.value)}} placeholder="full name"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
