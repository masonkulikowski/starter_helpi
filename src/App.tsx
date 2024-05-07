
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import APIsuff from "./API";
import Detailed_Question from "./detailed";
import Basic_Question from './basic';
import TopH from "./Top";
import Results from "./result";
import { Navigate } from "react-router-dom";



function App(): JSX.Element {
  return (
    <Router>
      <div className='App'>
        <TopH />
        <Routes>
          <Route path="/masonkulikowski.github.io/starter_helpi/" element={<Navigate replace to="./home" />} />
          <Route path="/basic" Component={Basic_Question } />
          <Route path="/detailed" Component={Detailed_Question } />
          <Route path="/result" element={<Results />} />
        </Routes>
        <APIsuff />
      </div>
    </Router>
  );
  }

export default App;