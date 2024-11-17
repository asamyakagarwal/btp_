import React, { useState } from 'react';
import './Calculator.css';

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

 
function Calculator() {
  // State variables to store input values, results, and error messages
  const [calculationType, setCalculationType] = useState('');
  const [diameter, setDiameter] = useState('');
  const [rpm, setRPM] = useState('');
  const [diameter1, setDiameter1] = useState('');
  const [diameter2, setDiameter2] = useState('');
  const [lengthOfCut, setLengthOfCut] = useState('');
  const [feedRate, setFeedRate] = useState('');
  const [revolutions, setRevolutions] = useState('');
  const [Vc, setVc] = useState('');
  const [Gp, setGp] = useState('');
  const [Fn, setFn] = useState('');
  const [Ap, setAp] = useState('');
  const [Kc, setKc] = useState('');
  const [cuttingSpeed, setCuttingSpeed] = useState(null);
  const [depthOfCut, setDepthOfCut] = useState(null);
  const [machineTime, setMachineTime] = useState(null);
  const [metalRemovalRate, setMetalRemovalRate] = useState(null);
  const [power, setPower] = useState(null);
  const [error, setError] = useState('');

  // Calculation functions for each calculation type
  const calculationFunctions = {
    cuttingSpeed: () => {
      if (diameter && rpm && rpm !== '0') {
        return (Math.PI * diameter * rpm) / 1000;
      } else {
        return null;
      }
    },
    DepthOfCut: () => {
      if (diameter1 && diameter2) {
        return (diameter1 - diameter2) / 2;
      } else {
        return null;
      }
    },
    machineTime: () => {
      if (lengthOfCut && feedRate && revolutions) {
        return lengthOfCut / (feedRate * revolutions);
      } else {
        return null;
      }
    },
    metalRemovalRate: () => {
      if (Vc && Gp && Fn) {
        return Vc * Gp * Fn;
      } else {
        return null;
      }
    },
    netPower: () => {
      if (Vc && Ap && Fn && Kc) {
        return (Vc * Ap * Fn * Kc) / 60000;
      } else {
        return null;
      }
    },
  };

  // Function to handle calculation based on selected type
  const handleCalculate = () => {
    setError(''); // Reset error message
  
    // Check if the calculation type is selected
    if (!calculationType) {
      setError('Please select a calculation first.');
      return; // Exit early if no calculation type is selected
    }
  
    const result = calculationFunctions[calculationType]();
    if (result === null) {
      setError('Please enter valid values for all required fields.');
    } else {
      switch (calculationType) {
        case 'cuttingSpeed':
          setCuttingSpeed(result);
          break;
        case 'DepthOfCut':
          setDepthOfCut(result);
          break;
        case 'machineTime':
          setMachineTime(result);
          break;
        case 'metalRemovalRate':
          setMetalRemovalRate(result);
          break;
        case 'netPower':
          setPower(result);
          break;
        default:
          break;
      }
    }
  };
  

  return (
    <div className="app-container">
      <Navbar />
      <h1 className="heading">Parameters of Lathe Machine</h1>
      <div className="dropdown-container">
        <label htmlFor="calculationType">Select Calculation:</label>
        <select
          id="calculationType"
          value={calculationType}
          onChange={(e) => setCalculationType(e.target.value)}
        >
          <option value="">--Choose an option--</option>
          <option value="cuttingSpeed">Cutting Speed</option>
          <option value="DepthOfCut">Depth of Cut</option>
          <option value="machineTime">Machine Time</option>
          <option value="metalRemovalRate">Metal Removal Rate</option>
          <option value="netPower">Net Power (Pc)</option>
        </select>
      </div>

      {/* Error message display */}
      {error && <p className="error-message">{error}</p>}

      {/* Dynamic input fields based on calculation type */}
      {calculationType === 'cuttingSpeed' && (
        <div className="input-container">
          <label htmlFor="diameter">Diameter (m):</label>
          <input
            type="number"
            id="diameter"
            value={diameter}
            onChange={(e) => setDiameter(e.target.value)}
            placeholder="Enter diameter in meters"
          />

          <label htmlFor="rpm">RPM (s):</label>
          <input
            type="number"
            id="rpm"
            value={rpm}
            onChange={(e) => setRPM(e.target.value)}
            placeholder="Enter RPM"
          />
        </div>
      )}

      {calculationType === 'DepthOfCut' && (
        <div className="input-container">
          <label htmlFor="diameter1">Initial Diameter (m):</label>
          <input
            type="number"
            id="diameter1"
            value={diameter1}
            onChange={(e) => setDiameter1(e.target.value)}
            placeholder="Enter initial diameter"
          />

          <label htmlFor="diameter2">Final Diameter (m):</label>
          <input
            type="number"
            id="diameter2"
            value={diameter2}
            onChange={(e) => setDiameter2(e.target.value)}
            placeholder="Enter final diameter"
          />
        </div>
      )}

      {calculationType === 'machineTime' && (
        <div className="input-container">
          <label htmlFor="lengthOfCut">Length of Cut (m):</label>
          <input
            type="number"
            id="lengthOfCut"
            value={lengthOfCut}
            onChange={(e) => setLengthOfCut(e.target.value)}
            placeholder="Enter length of cut"
          />

          <label htmlFor="feedRate">Feed Rate (m/min):</label>
          <input
            type="number"
            id="feedRate"
            value={feedRate}
            onChange={(e) => setFeedRate(e.target.value)}
            placeholder="Enter feed rate"
          />

          <label htmlFor="revolutions">No of revolutions (m/min):</label>
          <input
            type="number"
            id="revolutions"
            value={revolutions}
            onChange={(e) => setRevolutions(e.target.value)}
            placeholder="Enter number of revolutions"
          />
        </div>
      )}

      {calculationType === 'metalRemovalRate' && (
        <div className="input-container">
          <label htmlFor="Vc">Vc:</label>
          <input
            type="number"
            id="Vc"
            value={Vc}
            onChange={(e) => setVc(e.target.value)}
            placeholder="Enter Vc"
          />

          <label htmlFor="Gp">Gp:</label>
          <input
            type="number"
            id="Gp"
            value={Gp}
            onChange={(e) => setGp(e.target.value)}
            placeholder="Enter Gp"
          />

          <label htmlFor="Fn">Fn:</label>
          <input
            type="number"
            id="Fn"
            value={Fn}
            onChange={(e) => setFn(e.target.value)}
            placeholder="Enter Fn"
          />
        </div>
      )}

      {calculationType === 'netPower' && (
        <div className="input-container">
          <label htmlFor="Vc">Vc:</label>
          <input
            type="number"
            id="Vc"
            value={Vc}
            onChange={(e) => setVc(e.target.value)}
            placeholder="Enter Vc"
          />

          <label htmlFor="Ap">Ap:</label>
          <input
            type="number"
            id="Ap"
            value={Ap}
            onChange={(e) => setAp(e.target.value)}
            placeholder="Enter Ap"
          />

          <label htmlFor="Fn">Fn:</label>
          <input
            type="number"
            id="Fn"
            value={Fn}
            onChange={(e) => setFn(e.target.value)}
            placeholder="Enter Fn"
          />

          <label htmlFor="Kc">Kc:</label>
          <input
            type="number"
            id="Kc"
            value={Kc}
            onChange={(e) => setKc(e.target.value)}
            placeholder="Enter Kc"
          />
        </div>
      )}

      <button className="cal-button" onClick={handleCalculate}>Calculate</button>

      {/* Results display */}
      {cuttingSpeed !== null && (
        <div className="result-container">
          <p>Calculated Cutting Speed: {cuttingSpeed.toFixed(2)} m/min</p>
        </div>
      )}
      {depthOfCut !== null && (
        <div className="result-container">
          <p>Calculated Depth of Cut: {depthOfCut.toFixed(2)} m</p>
        </div>
      )}
      {machineTime !== null && (
        <div className="result-container">
          <p>Calculated Machine Time: {machineTime.toFixed(2)} min</p>
        </div>
      )}
      {metalRemovalRate !== null && (
        <div className="result-container">
          <p>Calculated Metal Removal Rate: {metalRemovalRate.toFixed(2)} m³/min</p>
        </div>
      )}
      {power !== null && (
        <div className="result-container">
          <p>Calculated Net Power (Pc): {power.toFixed(2)} kW</p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Calculator;
