import React from 'react';
import { useNavigate } from 'react-router-dom';
import './selectbar.css';

export default function SelectBar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log('Button clicked!');
    navigate(path);
  };

  return (
    <div>
      <h2>Election Commision 2025</h2>
      <br /><br /><br /><br /><br />
      <div className="button-group">
        <button onClick={() => handleClick('/nextpage')}>ජනාදිපතිවරණය <br />Presidential Election</button>
        <button onClick={() => handleClick('/nextpage')}>පාර්ලිමේන්තු මැතිවරණය <br />Parliament Election</button>
        <button onClick={() => handleClick('/nextpage')}>පළාත් පාලන මැතිවරණය <br />Provincial Council Election</button>
        <button onClick={() => handleClick('/nextpage')}>ජනමත විචාරණ <br />Add new</button>
      </div>
    </div>
  );
}