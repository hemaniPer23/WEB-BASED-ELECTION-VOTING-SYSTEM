import React from 'react'

export default function Nextpage() {
      const handleClick = () => {
   
      console.log('Button clicked!');
  }

  return (
    <div>
      <h2>Election Commision 2025</h2>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       <div className="button-group">
         <button onClick={handleClick}>ඡන්ද දායක ලියාපදිංචිය <br></br> Voter Registration</button>
         <button onClick={handleClick}> අපේක්ශක ලියාපදිංචිය <br></br>Candidate Registration</button>
         <button onClick={handleClick}> ඡන්දය ප්‍රකාශ කිරීම <br></br> Vote </button>
        </div>
    </div>
  )
}
