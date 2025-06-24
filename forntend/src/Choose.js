import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Choose.css';

const Choose = () => {
  const navigate = useNavigate();

  return (
    
    <div className="choose-container">
      <h1 className="choose-title">ලියාපදිංචි කිරීම<br/>Choose Registration Type</h1>
      <div className="button-group">
        <button
          className="reg-button candidate-button"
          onClick={() => navigate('/registrationcandidate')}
        >අපේක්ෂකයා ලියාපදිංචි කිරීම<br/>
          Registration Candidate
        </button>
        <button
          className="reg-button form-button"
          onClick={() => navigate('/registration')}
        >
          ඡන්දදායකයින් ලියාපදිංචි කිරීම <br/>Registration Voter
        </button>

        <button
          className="admininterface"
          onClick={() => navigate('/admininterface')}
        >
          Go Admin Interface
        </button>

        
      </div>
      <footer className="footer">
        &copy; 2025 Election Commission of Sri Lanka
      </footer>
    </div>
  );
};

export default Choose;
