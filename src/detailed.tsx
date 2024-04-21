import React, { useState } from 'react';
import './App.css';

function Detailed_Question(){
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

     //handles changes to detailed questions and updates the state
     const handleChange = (e: { target: { name: any; value: any; }; }) => {
     const { name, value } = e.target;
     setResponses(prevResponses => ({
        ...prevResponses,
        [name]: value,
    }));};
    //detailed responses get saved to console
    const submitAssessment = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('User Responses: ', responses);
    };

    return(
    <div className='App'>
    <header className='App-header'>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Detailed Questions</h1>
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
          </header>
          </div>
    );

}
export default Detailed_Question;