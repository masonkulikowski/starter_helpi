
import { Button } from 'react-bootstrap';
import './App.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Career Compass</h1>
                <p style={{position: 'absolute', top: '20%', textAlign: 'center'}}>Empowering Your Professional Journey</p>

                <p>Click here for a short career assessment consisting of seven multiple <br />
                    choice questions for more basic results.
                </p>
                <NavigationButton destination="/basic" label="Basic Question" />
                <p>
                    Click here for a detailed career assessment. This assessment includes <br />
                    open-ended questions to explore your career preferences and future.
                </p>
                <NavigationButton destination="/detailed" label="Deailed Question" />
            </div>
        </header>
    </div>
);
}
export default Home;