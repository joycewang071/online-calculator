import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [prevResult, setPrevResult] = useState(null);

  const handleNumber = (number) => {
    if (display === '0' || prevResult !== null) {
      setDisplay(number);
      setPrevResult(null);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator) => {
    if (prevResult !== null) {
      setEquation(prevResult + operator);
      setDisplay('0');
      setPrevResult(null);
    } else {
      setEquation(display + operator);
      setDisplay('0');
    }
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation('');
      setPrevResult(result.toString());
    } catch (error) {
      setDisplay('错误');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setPrevResult(null);
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="calculator">
      <div className="equation">{equation}</div>
      <div className="display">{display}</div>
      <div className="keypad">
        <div className="numbers">
          <button onClick={() => handleNumber('7')}>7</button>
          <button onClick={() => handleNumber('8')}>8</button>
          <button onClick={() => handleNumber('9')}>9</button>
          <button onClick={() => handleNumber('4')}>4</button>
          <button onClick={() => handleNumber('5')}>5</button>
          <button onClick={() => handleNumber('6')}>6</button>
          <button onClick={() => handleNumber('1')}>1</button>
          <button onClick={() => handleNumber('2')}>2</button>
          <button onClick={() => handleNumber('3')}>3</button>
          <button onClick={() => handleNumber('0')} className="zero">0</button>
          <button onClick={handleDecimal}>.</button>
        </div>
        <div className="operators">
          <button onClick={handleClear} className="clear">C</button>
          <button onClick={() => handleOperator('/')} className="operator">÷</button>
          <button onClick={() => handleOperator('*')} className="operator">×</button>
          <button onClick={() => handleOperator('-')} className="operator">-</button>
          <button onClick={() => handleOperator('+')} className="operator">+</button>
          <button onClick={handleEqual} className="equal">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator; 