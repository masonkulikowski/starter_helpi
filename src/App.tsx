
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import GPT from "./GPT";
import Detailed_Question from "./detailed";
import Basic_Question from './basic';
import Home from './home';
import TopH from "./Top";



function App(): JSX.Element {
  return (
    <Router>
      <div className='App'>
        <TopH />
        <Routes>
        <Route index element={<Home />} />
           <Route path="/home" Component={Home} />
           <Route path="/basic" Component={Basic_Question} />
           <Route path="/detailed" Component={Detailed_Question} />
        </Routes>
        <GPT />
      </div>
    </Router>
  
  
  );

  }

export default App;