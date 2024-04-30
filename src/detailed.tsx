import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { responseDetailed } from './ChatGPT';

interface Responses {
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;
    question7: string;
    [key: string]: string;  // Index signature
}

// Global array to store responses
const globalResponses: string[] = [];

function DetailedQuestion() {
    const [responses, setResponses] = useState<Responses>({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
    });

    const navigate = useNavigate();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const questions = [
        { label: "1. What careers seem interesting to you? Why?", name: "question1" },
        { label: "2. What are your current skills? (Hard Skills and Soft Skills)", name: "question2" },
        { label: "3. What is your highest level of education or training?", name: "question3" },
        { label: "4. What is your ideal Work-life balance?", name: "question4" },
        { label: "5. What are you willing to give up for better career opportunities?", name: "question5" },
        { label: "6. How important is money?", name: "question6" },
        { label: "7. What impact do you want to make on the world?", name: "question7" },
        { label: "All done!", name: "done"}
    ];

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setResponses(prevResponses => ({
            ...prevResponses,
            [name]: value,
        }));
    };
    const storeResponsesAndNavigate = () => {
        const holder = JSON.stringify(responses);
        globalResponses.push(holder);
        console.log('Global Responses: ', globalResponses);
        responseDetailed(globalResponses);
        navigate("/result");
        };

    const handleNavigation = (direction: 'next' | 'prev') => {
        setCurrentQuestionIndex(prevIndex => 
            direction === 'next' ? Math.min(questions.length - 1, prevIndex + 1) : Math.max(0, prevIndex - 1)
        );
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className='App'>
            <header className='App-header'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1>Detailed Questions</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div>
                            {currentQuestionIndex < questions.length - 1 &&(
                                <><label>{currentQuestion.label}</label><br /><br />
                                <textarea
                                    id={currentQuestion.name}
                                    name={currentQuestion.name}
                                    rows={4}
                                    cols={100}
                                    value={responses[currentQuestion.name]}
                                    onChange={handleChange} /></>
                             )}
                             {currentQuestionIndex === questions.length -1 &&(
                                <><label>{currentQuestion.label}</label><br /><br /><br /><br /></>
                             )}
                        </div>
                        <div style={{ marginTop: 20 }}>
                            {currentQuestionIndex > 0 && (
                                <Button onClick={() => handleNavigation('prev')} className='Detailed-button'>Previous</Button>
                            )}
                            {currentQuestionIndex < questions.length - 1 && (
                                <Button onClick={() => handleNavigation('next')} className='Detailed-button'>Next</Button>
                            )}
                            {currentQuestionIndex === questions.length - 1 && (
                                <Button onClick={storeResponsesAndNavigate} className='Detailed-button'>See Result</Button>
                            )}
                        </div>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default DetailedQuestion;