import { Link } from 'react-router-dom';
import './App.css';
import { responseDetailed } from './ChatGPT';
import { Button } from 'react-bootstrap';

function testingGPT(){
}

function Results(){
    return(
        <div className='App'>
            <header className="App-header">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Result Page </h1>
                    <p style={{position: 'absolute', top: '20%', textAlign: 'center'}}>Your result will be shown here:</p>
                    <p style={{position: 'absolute', top: '30%', textAlign: 'center'}}>Based on your answers, the best career for you would be ________</p>
                    <Link to="/Home" className="container" style={{ textAlign:'center', padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', borderRadius: '5px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', cursor: 'pointer'}}>
                        Back to Home
                    </Link>
                    <Button className='Submit-Button' onClick={testingGPT}></Button>
                </div>
          </header>
        </div>
    );

}
export default Results;