import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './VoterSummary.css';

const COLORS = ['#00C49F', '#FF8042']; // Colors: Voted, Not Voted

const ElectionDashboard = () => {
  const [registeredUsers, setRegisteredUsers] = useState(100);
  const [voters, setVoters] = useState(50);

  const votingRate = registeredUsers === 0 ? 0 : ((voters / registeredUsers) * 100).toFixed(2);
  const remaining = registeredUsers - voters;

  const pieData = [
    { name: 'Voted', value: voters },
    { name: 'Not Voted', value: remaining > 0 ? remaining : 0 }
  ];

  const registerUser = () => {
    setRegisteredUsers(registeredUsers + 1);
  };

  const addVoter = () => {
    if (voters < registeredUsers) {
      setVoters(voters + 1);
    } else {
      alert('All registered users have already voted.');
    }
  };

  return (
    <div className="dashboard-container">
      {/* Added Main Title */}
      <br/> <br/> <br/>
      <h1 className="dashboard-main-title">Sumamay</h1>

      <h1 className="dashboard-title">වත්මන් ඡන්ද සාරාංශය<br /></h1>

      <div className="info-card">
        <p className="info-text">ලියාපදිංචි <br />Registered Users: <span>{registeredUsers}</span></p>
        <button className="btn register" onClick={registerUser}>Register New User</button>
      </div>

      <div className="info-card">
        <p className="info-text">ප්‍රකාශිත Voted Users: <span>{voters}</span></p>
        <button className="btn vote" onClick={addVoter}>Add Voter</button>
      </div>

      <div className="chart-section">
        <h2 className="voting-rate">Voting Rate: <span>{votingRate}%</span></h2>

        {/* Pie Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ElectionDashboard;
