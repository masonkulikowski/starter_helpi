
import { Button } from 'react-bootstrap';
import './App.css';
import { useNavigate } from "react-router-dom";
//Creates a button function 
interface NavigationButtonProps {
    destination: string;
    label: string;
  }
  
  const NavigationButton: React.FC<NavigationButtonProps> = ({ destination, label }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(destination);
    };
  
    return (
      <Button onClick={handleClick}>
        {label}
      </Button>
    );
  }
  
function Home(){
return(
<div className="App">
  <header className="App-header">
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0px' }}>
      <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2em', marginBottom: '10px' }}>Career Compass</h1>
      <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2em', marginBottom: '10px' }}>Empowering Your Professional Journey</h2>
      <div style={{ textAlign: 'center' }}>
        <ul style={{ fontFamily: 'revert', fontSize: '1.2em', marginBottom: '20px', listStyleType: 'none', paddingInlineStart: '0px' }}>
          <li>Click here for a short career assessment consisting of seven multiple choice questions for more basic results.</li>
          <li>Click here for a detailed career assessment. This assessment includes open-ended questions to explore your career preferences and future.</li>
        </ul>
      </div>
    </div>
  </header>
</div>
);
}
export default Home;