import React, { useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [progress, setProgress] = useState<number>(0);

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

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div className="App">

      <header className="App-header">

      {currentPage === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Career Compass</h1>
            <p style={{position: 'absolute', top: '20%', textAlign: 'center'}}>Empowering Your Professional Journey</p>
            <Button style={{margin: '10px'}} onClick={goBasic}>Basic Questions</Button>
            <p>Click here for a short career assessment consisting of seven multiple <br />
               choice questions for more basic results.</p>
            <Button style={{margin: '10px'}} onClick={goDetailed}>Detailed Questions</Button>
            <p>
              Click here for a detailed career assessment. This assessment includes <br />
              open-ended questions to explore your career preferences and future.
            </p>
          </div>
        )}
        {currentPage === 'basic' && (
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <h1>Basic Questions</h1>

            <Button className="Back-button" onClick={goHome}>Back to Home</Button>
            <div>
              <Button style={{margin: '10px'}} onClick={() => setProgress(progress === 7 ? progress : progress + 1)}>add proggress</Button><br/>
              <Button style={{margin: '10px'}} onClick={() => setProgress(0)}>reset</Button><br />
            </div>
            <div className='progress'>
              <p>Progress</p>
              <div style={{
                backgroundColor: 'green',
                height: '10px',
                width: String(progress) + '00px',
                display: "inline-block",
                verticalAlign: "top",
                marginLeft: "0%"
              }}>
              </div>
              <div style={{
                backgroundColor: 'gray',
                height: '10px',
                width: String(7 - progress) + '00px',
                display: "inline-block",
                verticalAlign: "top",
                marginLeft: "0%"
              }}>
              </div>
            </div>
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
