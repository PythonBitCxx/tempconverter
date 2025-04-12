import { useNavigate } from 'react-router-dom';
import '../App.css'; 

function LandingPage() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/converter');
  };
  
  return (
    <div className="landing-page">
      <h1 className="landing-title">Temperature Converter</h1>
      <button
        className="continue-button"
        onClick={handleClick}
      >
        Continue
      </button>
    </div>
  );
}

export default LandingPage;