
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import APIsuff from "./API";
import DetailedQuestion from "./detailed";
import BasicQuestion from './basic';
import Home from './home';
import TopH from "./Top";
import Results from "./result";



function App(): JSX.Element {
  return (
<Router>
      <div className='App'>
        <TopH />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/basic" element={<BasicQuestion />} />
          <Route path="/detailed" element={<DetailedQuestion />} />
          <Route path="/result" element={<Results />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <APIsuff />
      </div>
    </Router>
  
  
  );
}

export default App;