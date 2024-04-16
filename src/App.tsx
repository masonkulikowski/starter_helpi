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

function App(): JSX.Element {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [currentPage, setCurrentPage] = useState<string>("home");
    const questions = [
      'How do you prefer to work?',
      'What motivates you in your work?',
      'What are your primary career goals?',
      'What are your key strengths and skills?',
      'What are your key values in the workplace?',
      'How do you handle challenges and setbacks?',
      'Where do you see yourself in 5-10 years?'
    ];
    const answers = [
      ['Independently', 'Collaboratively in a team', 'In a structured environment', 'In a dynamic and fast-paced setting'],
      ['Achievement and recognition', 'Creativity and innovation', 'Helping others and making a difference', 'Financial stability and security'],
      ['Advancing in my current field', 'Transitioning to a new field', 'Starting my own business', 'Exploring various career options'],
      ['Analytical and problem-solving', 'Communication and interpersonal', 'Leadership and decision-making', 'Adaptability and flexibility'],
      ['Work-life balance', 'Professional development and growth', 'Diversity and inclusivity', 'Integrity and ethics'],
      ['Persevere and find solutions', 'Seek support and advice from others', 'Reflect and learn from the experience', 'Stay positive and maintain perspective'],
      ['Climbing the corporate ladder', 'Pursuing further education or training', 'Leading a team or organization', 'Exploring new opportunities and challenges']
    ];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //States for all detailed questions responses
  const [responses, setResponses] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
  });

    const handleAnswerSelect = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Handle end of questions
      }
    };
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

   //handles changes to detailed questions and updates the state
   const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setResponses(prevResponses => ({
      ...prevResponses,
      [name]: value,
    }));
  };

 //detailed responses get saved to console
  const submitAssessment = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('User Responses: ', responses);

  };


  return (
    <div className="App">
      <header className="App-header">

      {currentPage === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '5%' }}>
            <h1>Career Compass</h1>
            <p style={{position: 'absolute', top: '20%', textAlign: 'center'}}>Empowering Your Professional Journey</p>
            <div style={{marginTop: '50px'}}>
              <Button className="Question-button" onClick={goBasic}>Basic Questions</Button>
              <p>Click here for a short career assessment consisting of seven multiple <br />
                choice questions for more basic results.
              </p>
            </div>
            <div style={{marginTop: '50px'}}>
              <Button className="Question-button" onClick={goDetailed}>Detailed Questions</Button>
              <p>
                Click here for a detailed career assessment. This assessment includes <br />
                open-ended questions to explore your career preferences and future.
              </p>
            </div>
          </div>
        )}
        {currentPage === 'basic' && (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
    <h1 style={{ marginBottom: '20px', color: '#fff', fontSize: '36px', fontWeight: 'bold' }}>Basic Questions</h1>
    <div style={{ marginBottom: '20px', width: '80%', textAlign: 'center' }}>
      <h3 style={{ color: '#666', fontSize: '18px' }}>{questions[currentQuestion]}</h3>
    </div>
    <ol type="A" style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-end', width: '80%' }}>
      {answers[currentQuestion].map((answer, index) => (
        <div key={index} style={{ marginBottom: '10px', flex: 1 }}>
          <button className="button" onClick={handleAnswerSelect} style={{ width: '100%', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', padding: '10px', fontSize: '16px', fontWeight: 'bold', border: 'none', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', cursor: 'pointer' }}>{String.fromCharCode(65 + index)}. {answer}</button>
        </div>
      ))}
    </ol>
    {currentQuestion < questions.length && (
      <Button className="Back-button" onClick={goHome} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', borderRadius: '5px', border: 'none', fontSize: '16px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', cursor: 'pointer' }}>Back to Home</Button>
    )}
  </div>
)}
        {currentPage === 'detailed' && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Detailed Questions</h1>
            <Button className="Back-button" onClick={goHome}>Back to Home</Button>
            <form onSubmit={submitAssessment}>
              <div>
                <label>1.What careers seem interesting to you? Why?</label>
                   <textarea
                    id="question1"
                    name="question1"
                    value={responses.question1}
                    onChange={handleChange}
                  />
              </div>
              <div>
                <label>2.What are your current skills?(Hard Skills and Soft Skills)</label>
                   <textarea
                    id="question2"
                    name="question2"
                    value={responses.question2}
                   onChange={handleChange}
                  />
             </div>
             <div>
               <label>3.What is your highest level of education or training?</label>
                 <textarea
                   id="question3"
                   name="question3"
                   value={responses.question3}
                   onChange={handleChange}
                 />
              </div>
              <div>
               <label>4.What is your ideal Work-life balance?</label>
                 <textarea
                   id="question4"
                   name="question4"
                   value={responses.question4}
                   onChange={handleChange}
                 />
              </div>
              <div>
               <label>5.What are you willing to give up for better career opportunities?</label>
                 <textarea
                   id="question5"
                   name="question5"
                   value={responses.question5}
                   onChange={handleChange}
                 />
              </div>
              <div>
               <label>6.How important is money?</label>
                 <textarea
                   id="question6"
                   name="question6"
                   value={responses.question6}
                   onChange={handleChange}
                 />
              </div>
              <div>
               <label>7.What impact do you want to make on the world?</label>
                 <textarea
                   id="question7"
                   name="question7"
                   value={responses.question7}
                   onChange={handleChange}
                 />
              </div>
              <button type="submit">Submit</button>
            </form>
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