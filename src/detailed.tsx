import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

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

function DetailedQuestion() {
    // States for all detailed questions responses
    const [responses, setResponses] = useState<Responses>({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
    });

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const questions = [
        { label: "1. What careers seem interesting to you? Why?", name: "question1" },
        { label: "2. What are your current skills? (Hard Skills and Soft Skills)", name: "question2" },
        { label: "3. What is your highest level of education or training?", name: "question3" },
        { label: "4. What is your ideal Work-life balance?", name: "question4" },
        { label: "5. What are you willing to give up for better career opportunities?", name: "question5" },
        { label: "6. How important is money?", name: "question6" },
        { label: "7. What impact do you want to make on the world?", name: "question7" },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setResponses(prevResponses => ({
            ...prevResponses,
            [name]: value,
        }));
    };

    const submitAssessment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('User Responses: ', responses);
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
                    <form onSubmit={submitAssessment}>
                        <div>
                            <label>{currentQuestion.label}</label>
                            <textarea
                                id={currentQuestion.name}
                                name={currentQuestion.name}
                                value={responses[currentQuestion.name]}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ marginTop: 20 }}>
                            {currentQuestionIndex > 0 && (
                                <button type="button" onClick={() => handleNavigation('prev')}>Previous</button>
                            )}
                            {currentQuestionIndex < questions.length - 1 && (
                                <button type="button" onClick={() => handleNavigation('next')} style={{ marginLeft: 8 }}>Next</button>
                            )}
                            {currentQuestionIndex === questions.length - 1 && (
                                <Link to="/Home" className="Submit-Button">Submit</Link>
                            )}
                        </div>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default DetailedQuestion;