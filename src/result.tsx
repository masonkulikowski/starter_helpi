import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';
import { responseBasic } from './ChatGPT';

function Results(){
    const location = useLocation();
    const responses = (location.state as { responses: { question: string, answer: string }[] }).responses;

    // State to store the generated response
    const [generatedResponse, setGeneratedResponse] = useState<string | null>('');
    // Use useEffect to call responseBasic only on component mount
    useEffect(() => {
        const fetchResponse = async () => {
            const result = await responseBasic(responses);
            setGeneratedResponse(result);
            console.log(result); // Optionally log the result here
        };

        fetchResponse();
    }, [responses]); // Empty dependency array means this effect runs only once after the initial render

    return(
        <div className='App'>
            <header className="App-header">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Result Page</h1>
                    <p style={{position: 'absolute', top: '20%', textAlign: 'center'}}>Your result will be shown here:</p>
                    <div>
                      <h2>Your Responses:</h2>
                      {responses.map((response, index) => (
                        <p key={index}>{response.question}: {response.answer}</p>
                      ))}
                      {generatedResponse && (
                        <div>
                          <h2>AI Suggestion:</h2>
                          <p>{generatedResponse}</p>
                        </div>
                      )}
                    </div>
                    <Link to="/Home" className="container" style={{ textAlign:'center', padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', borderRadius: '5px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', cursor: 'pointer'}}>
                        Back to Home
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Results;
