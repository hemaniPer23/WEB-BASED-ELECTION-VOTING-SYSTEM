import './App.css';
import Picture from './Pages/Picture';
import SelectBar from './Pages/SelectBar';
import Nextpage from './Pages/Nextpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1><b>මැතිවරණ කොමිසන් සභාව 2025</b></h1>
        <br />
        <Routes>
          <Route path="/" element={<SelectBar />} />
          <Route path="/Nextpage" element={<Nextpage />} />
          <Route path="/Picture" element={<Picture />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
