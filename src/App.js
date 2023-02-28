import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
const ipAddress = window.location.hostname;
const myAPI = "botwRestAPI"
const path = '/users/get'; 
const localhost = 'http://'+ipAddress;
const App = () => {
  const [productId, setProductId] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [parties, setParties] = useState([]);


  

  async function getParties() {
  	console.log("get parties");

    const response = await fetch(localhost+":3032/botw-react/get/parties", {
  headers: {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
  }
  });
      const data = await response.json().then((d) => {
        setParties(d.data);
        console.log(d);
      return d;
      });
  }

  function createApplicationHandler(event){
    console.log("create application handler");
    event.preventDefault();

    const address = {
      city:city,
      state:state,
      street: street,
      zip:zip
    }

    let customer = {
      firstName: fname,
      lastName:lname,
      email:email
  };

  const application = {
    productId: productId,
    applicationStatus:applicationStatus,
    customer:customer,
    address:address
  }
      createApplication(application);
  }

  async function createApplication(application){
    console.log("create app!");
    console.log(JSON.stringify(application));
    const api = 'https://d0jgdwdab2.execute-api.us-east-1.amazonaws.com/corsStage/';
    
    axios
      .post(api, application)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    
<div>
  <p className="header">Bank Co.</p>
  <div className="centerAlign">
    <form>
      <h1>Create Application</h1>
      <div className="form-div">
        <div>
        <input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
        <input placeholder="first name" type="text" value={fname} onChange={(e) => setFname(e.target.value)}/>
        </div>
        <div>      
        <input placeholder="last name" type="text" value={lname} onChange={(e) => setLname(e.target.value)}/>
        </div>
        <div>      
        <input placeholder="product ID" type="text" value={productId} onChange={(e) => setProductId(e.target.value)}/>
        </div>  
        <div>      
        <input placeholder="application Status" type="text" value={applicationStatus} onChange={(e) => setApplicationStatus(e.target.value)}/>
        </div>  
        <div>      
        <input placeholder="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)}/>
        </div>  
        <div>      
        <input placeholder="city" type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
        </div> 
        <div>      
        <input placeholder="state" type="text" value={state} onChange={(e) => setState(e.target.value)}/>
        </div> 
        <div>      
        <input placeholder="Zip Code" type="number" value={zip} onChange={(e) => setZip(e.target.value)}/>
        </div>  
        <br/>
        <button onClick={createApplicationHandler}>Create Application</button>
      </div>
    </form>
    </div>
    <div className="centerAlign">
      <form>
      <h1>Retrieve Applications</h1>
      <div className="form-div">
        <button onClick={getParties}>Retrieve Applications</button>
        <table><tr><td><h3>Name</h3></td><td><h3>Username</h3></td></tr>
                {parties.map((p) => {
                  return (
                          <tr><td>{p.name}</td><td>{p.username}</td></tr>
                  );
                })
              }
        </table>
      </div>
      </form>
    </div>


</div>
  )
}
 
export default App;
