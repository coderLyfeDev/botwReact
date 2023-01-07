import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

const myAPI = "botwRestAPI"
const path = '/users/get'; 

const App = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  

  async function getParties() {
  	console.log("get parties");

    const response = await fetch("http://3.82.220.33:3032/botw-react/get/parties", {
  headers: {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
  }
  });
      const data = await response.json().then((d) => {
        console.log(d);
      return d;
      });
  }

  function createPartyHandler(event){
    console.log("create party handler");
    event.preventDefault();
  
    let party = {
      name: fname+" "+lname,
      password:password,
      username:username
  };
      createParty(party);
  }
  
  async function createParty(party){
    console.log("create party");
    const response = await fetch("http://3.82.220.33:3032/botw-react/create/party", {
    method: 'POST',
    body: JSON.stringify(party),
    headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
    }
    });
        const data = await response.json();
        const [message, newUser] = data
        console.log(message);
        console.log(newUser);
        return newUser;
  }

  return (
    
<div>
<h1>POST Request</h1>
<div>
  <input placeholder="user name" type="text" value={username} onChange={(e) => setusername(e.target.value)}/>
</div>
<div>
  <input placeholder="first name" type="text" value={fname} onChange={(e) => setFname(e.target.value)}/>
</div>
<div>      
  <input placeholder="last name" type="text" value={lname} onChange={(e) => setLname(e.target.value)}/>
</div>
<div>      
  <input placeholder="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
</div>      
<br/>
  <button onClick={createPartyHandler}>Create party</button>
<h1>
    get parties
</h1>
<button onClick={getParties}>Create party</button>
</div>
  )
}

export default App;
