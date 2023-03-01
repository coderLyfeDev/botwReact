import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
const ipAddress = window.location.hostname;
const myAPI = "botwRestAPI"
const path = '/users/get'; 
const localhost = 'http://'+ipAddress;
const App = () => {
  const [productId, setProductId] = useState("Premier Checking");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [application, setApplication] = useState(null);

  async function getApplications(appId) {
  console.log("get Applications");
  const api = 'https://0k9a76n47e.execute-api.us-east-1.amazonaws.com/dev/applications/'+appId;
    
  axios
    .get(api)
    .then((response) => {
      console.log(response.data.body);
      setApplication(response.data.body);
    })
    .catch((error) => {
      console.log(error);
    });
  
  }

  const handleChange = (event) => {
    setProductId(event.target.value);
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

  const app = {
    productId: productId,
    customer:customer,
    address:address
  }
      createApplication(app);
      setProductId("");
      setEmail("");
      setFname("");
      setLname("");
      setCity("");
      setState("");
      setZip("");
      setStreet("");
  }

  async function createApplication(application){
    console.log("create app!");
    console.log(JSON.stringify(application));
    const api = 'https://0k9a76n47e.execute-api.us-east-1.amazonaws.com/dev/applications';
    
    axios
      .post(api, application)
      .then((response) => {
        console.log(response);
        getApplications(response.data.applicationId);
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
        <select id="dropdown" value={productId} onChange={handleChange}>
        <option value="Premier Checking">Premier Checking</option>
      </select>
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
      {application && 
        <div><p><b>Application ID:</b>&nbsp;{application.applicationId}</p><p><b>Application Status:</b>&nbsp;{application.applicationStatus}&nbsp;&nbsp;</p></div>
        }
    </form>
    </div>
    


</div>
  )
}
 
export default App;
