import { useState, useEffect } from 'react';
import '../App.css'; 

const TemperatureConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('celsius');
  const [outputUnit, setOutputUnit] = useState('fahrenheit');

  useEffect(() => {
    if (inputValue === '') {
      setOutputValue('');
      return;
    }

    const numericInput = parseFloat(inputValue);
    
    if (isNaN(numericInput)) {
      setOutputValue('Invalid input');
      return;
    }

    let result;
    
    //input to Kelvin
    let kelvin;
    switch (inputUnit) {
      case 'celsius':
        kelvin = numericInput + 273.15;
        break;
      case 'fahrenheit':
        kelvin = (numericInput - 32) * 5/9 + 273.15;
        break;
      case 'kelvin':
        kelvin = numericInput;
        break;
      default:
        kelvin = 0;
    }
    
    //Kelvin to output unit
    switch (outputUnit) {
      case 'celsius':
        result = kelvin - 273.15;
        break;
      case 'fahrenheit':
        result = (kelvin - 273.15) * 9/5 + 32;
        break;
      case 'kelvin':
        result = kelvin;
        break;
      default:
        result = 0;
    }
    
    setOutputValue(result.toFixed(2));
  }, [inputValue, inputUnit, outputUnit]);

  const switchUnits = () => {
    setInputUnit(outputUnit);
    setOutputUnit(inputUnit);
    setInputValue(outputValue);
    setOutputValue(inputValue);
  };

  return (
    <div className="converter-container">
      <div className="converter-card">
        <h2 className="converter-title">Temperature Converter</h2>
        
        <div className="converter-layout">
          {/* Input side */}
          <div className="unit-group">
            <select 
              className="glossy-select"
              value={inputUnit}
              onChange={(e) => setInputUnit(e.target.value)}
            >
              <option value="celsius">Celsius (°C)</option>
              <option value="fahrenheit">Fahrenheit (°F)</option>
              <option value="kelvin">Kelvin (K)</option>
            </select>
            <input
              className="glossy-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter temp"
            />
          </div>
          
          {/* Switch button */}
          <div className="switch-button-container">
            <button 
              onClick={switchUnits}
              className="switch-button"
            >
              ⇄
            </button>
          </div>
          
          {/* Output side */}
          <div className="unit-group">
            <select 
              className="glossy-select"
              value={outputUnit}
              onChange={(e) => setOutputUnit(e.target.value)}
            >
              <option value="celsius">Celsius (°C)</option>
              <option value="fahrenheit">Fahrenheit (°F)</option>
              <option value="kelvin">Kelvin (K)</option>
            </select>
            <input
              className="glossy-input"
              type="text"
              value={outputValue}
              readOnly
              placeholder="Result"
            />
          </div>
        </div>
        
        <div className="clear-button-container">
          <button 
            onClick={() => {
              setInputValue('');
              setOutputValue('');
            }}
            className="clear-button"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;