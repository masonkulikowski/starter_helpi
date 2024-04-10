import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [isHomeVisible, setHomeVisible] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>("home");


  const goHome = () => {
    setCurrentPage("home");
  }

  const goBasic = () => {
    setCurrentPage("basic");
  }

  const goDetailed = () => {
    setCurrentPage("detailed");
  }

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }
  // function navigateHome() {
  //  window.location.href = '/';
  //}
  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  //function navigateHome() {
  //  window.location.href = '/';
  //}
  return (
    <div className="App">
      <header className="App-header">

      {currentPage === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Career Compass</h1>
            <p style={{position: 'absolute', top: '20%', textAlign: 'center'}}>Empowering Your Professional Journey</p>
            <Button onClick={goBasic}>Basic Questions</Button>
            <Button onClick={goDetailed}>Detailed Questions</Button>
          </div>
        )}
        {currentPage === 'basic' && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Basic Questions</h1>

            <Button className="Back-button" onClick={goHome}>Back to Home</Button>
          </div>
        )}
        {currentPage === 'detailed' && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Detailed Questions</h1>
            <Button className="Back-button" onClick={goHome}>Back to Home</Button>
          </div>
        )}

      </header>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  )
}

export default App;
