import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Home(){
return(
    <div className="App">
        <header className="App-header">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Career Compass</h1>
                <p style={{position: 'absolute', top: '20%', textAlign: 'center'}}>Empowering Your Professional Journey</p>

                <p>Click here for a short career assessment consisting of seven multiple <br />
                    choice questions for more basic results.
                </p>
                    <ul>
                        <Link to="/basic">
                            <li>BASIC QUESTIONS</li>
                        </Link>
                    </ul>
                <p>
                    Click here for a detailed career assessment. This assessment includes <br />
                    open-ended questions to explore your career preferences and future.
                </p>
                     <ul>
                        <Link to="/detailed">
                            <li>Detailed QUESTIONS</li>
                        </Link>
                    </ul>
            </div>
        </header>
    </div>
);            //<Button style={{margin: '10px'}} onClick={goBasic}>Basic Questions</Button>
// <Button style={{margin: '10px'}} onClick={goDetailed}>Detailed Questions</Button>


}
export default Home;