import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TemperatureConverter from './components/TempConverter';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/converter" element={<TemperatureConverter />} />
      </Routes>
    </Router>
  );
}

export default App;