import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";


function Basic_Question(){
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
    const [progress, setProgress] = useState<number>(0);
    const [showResults, setShowResults] = useState<boolean>(false);

    const handleAnswerSelect = () => {
      if(currentQuestion === questions.length - 1){
        setShowResults(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
      if(progress < 7){
        setProgress(progress + 1);
      }
    };
      

      return (
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
            <div className='progress'>
              <p style={{ color: '#666', fontSize: '18px', fontWeight: 'bold' }}>Progress</p>
              <div style={{
                backgroundColor: '#18c002',
                height: '10px',
                width: String(progress * 150) + 'px',
                display: "inline-block",
                verticalAlign: "top",
                marginLeft: "0%"
                }}>
              </div>
              <div style={{
                backgroundColor: '#fff',
                height: '10px',
                width: String((7 - progress) * 150) + 'px',
                display: "inline-block",
                verticalAlign: "top",
                marginLeft: "0%"
                }}>
              </div>
            </div>
          </ol>
          {showResults && (
             <Link to="/result" className="Submit-button" style={{marginLeft: '10px',boxShadow:'0 2px 4px rgba(0,0,0,0.2)',backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', padding: '9px 27px 12px', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none' }}>See Result</Link>
          )}
      </div>
      );
    }

export default Basic_Question;
