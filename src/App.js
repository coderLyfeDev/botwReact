import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

const myAPI = "botwRestAPI"
const path = '/users/get'; 

const App = () => {
  const [input, setInput] = useState("")
  const [customers, setCustomers] = useState([])
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const [party, setParty] = useState([]);

  

  async function createParty() {
  	console.log("create party");
         let newParty = {
          "name": fname+" " + lname,
          "password": password,
          "username": username
        };
        let partyList = [...party];
        partyList.push(newParty)
         setParty(partyList);
         const response = await fetch("http://3.82.220.33:3032/botw-react/get/parties", {
  headers: {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
  }
  });
      const data = await response.json().then((d) => {
        console.log("Printing data returned");
        console.log(d);
        console.log("Printing data returned After");
        //dispatch(UserProfileActions.login());
        //dispatch(UserProfileActions.signUp(d.data[0]));
        //getEducation(d.data[0].id);
        //getWorkHistory(d.data[0].id);
        //getCareerInterest(d.data[0].id);
      return d;
      });
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
  <button onClick={createParty}>Create party</button>
<h1>
    Created party
</h1>
{party.map((p) => {
    return (
      <div key={p.username}>
          <p><b>Name: </b>{p.name}</p>
          <p><b>Username: </b>{p.username}</p>
          <p><b>Password: </b>{p.password}</p>
      </div>
    );
  })
}
</div>
  )
}

export default App;
