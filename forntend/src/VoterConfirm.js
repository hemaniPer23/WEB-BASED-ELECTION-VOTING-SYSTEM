import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Use your existing CSS or create a new one

const EnterIdPage = () => {
  const [idNumber, setIdNumber] = useState("");
  const navigate = useNavigate();

  const handleConfirm = (e) => {
    e.preventDefault();

    if (idNumber.trim() !== "") {
      navigate("/votersummary"); // ✅ Go to VoterSummary page
    } else {
      alert("Please enter a valid ID number.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="title">Enter ID Number</h1>

      <div className="login-box">
        <form onSubmit={handleConfirm}>
          <input
            type="text"
            name="idNumber"
            placeholder="Enter your ID Number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
          />
          <button type="submit" className="lang-btn">
            Confirm
          </button>
        </form>
      </div>

      <footer className="footer">
        &copy; 2025 Election Commission of Sri Lanka
      </footer>
    </div>
  );
};

export default EnterIdPage;
