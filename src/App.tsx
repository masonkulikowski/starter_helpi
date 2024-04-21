import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Button, Form } from 'react-bootstrap';
import GPT from "./GPT";
import Detailed_Question from "./detailed";
import Basic_Question from './basic';
import Home from './home';



function App(): JSX.Element {
  return (
    <Router>
      <div className='App'>
        <Home />
        <Routes>
           <Route path="/basic" Component={Basic_Question} />
           <Route path="/detailed" Component={Detailed_Question} />
        </Routes>
        <GPT />
      </div>
    </Router>
  
  
  );

  }

export default App;