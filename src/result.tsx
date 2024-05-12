import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import { GptResponse } from './ChatGPT';


function Results(){
    const location = useLocation();
    const responses = (location.state as { responses: { question: string, answer: string }[] }).responses;

    const [generatedResponse, setGeneratedResponse] = useState<string | null>('');
    useEffect(() => {
        const getResponse = async () => {
            const result = await GptResponse(responses);
            setGeneratedResponse(result);
            console.log(result); 
        };

        getResponse();
    }, [responses]);

    const[email, setEmail] = useState<string>("");

    function updateEmail(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setEmail(event.target.value);
    };
    function send() {
    }

    

    return(
        
        <div className='App'>
            <header className='App-header'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px', backgroundColor: '#4B6D7A', height:'auto' }}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',color:"#000",marginBottom: '20px', fontSize: '40px', fontWeight: 'bold', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: "#000", marginBottom: '20px', fontSize: '40px', fontWeight: 'bold', height: '100%' }}>
                            {!generatedResponse ? (
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                     <h1 style={{ marginBottom: '20px', color: '#000', fontSize: '40px', fontWeight: 'bold' }}>Loading.....</h1>
                            </div>
                            ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <h1 style={{ marginBottom: '20px', color: '#000', fontSize: '40px', fontWeight: 'bold' }}>AI Suggestion</h1>
                                {generatedResponse.split(".").map((sentence, index) => (
                                <div key={index} style={{ color: '#fff', fontSize: '20px', alignItems: 'center', width:'1000px', wordWrap:'break-word'}}>{sentence}</div>
                                ))}
                                <div>
                                    <textarea
                                    rows={2}
                                    cols={20}
                                     onChange={updateEmail}/>
                                     <br />
                                     <p>{email}</p>
                                     <button type="button" onClick={() => send} className='Detailed-button'>Send Email</button>
                                     </div>
                            </div>
                            )
                            }
                        </div>
                    </div>
                </div>
                
            </header>
        </div>
    );
}

export default Results;
