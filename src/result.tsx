import { Link } from 'react-router-dom';
import './App.css';
import { useState } from 'react';


function Results(){

    const[email, setEmail] = useState<string>("");

    function updateEmail(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setEmail(event.target.value);
    };
    function send() {
        
    }

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
                </div>< br />
                <div>
                    <textarea
                    rows={2}
                    cols={20}
                    onChange={updateEmail}
                    /><br />
                    <button type="button" onClick={() => send} className='Detailed-button'>Send Email</button>
                </div>
            </header>
        </div>
    );

}
export default Results;