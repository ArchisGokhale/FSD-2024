import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS file for styling

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0'); // Initialize the display value to 0
  const [operator, setOperator] = useState(null); 
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [previousValue, setPreviousValue] = useState(null);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
    } else if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (previousValue == null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const currentValue = previousValue || 0;
      const newValue = calculate[operator](currentValue, inputValue);

      setDisplayValue(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = {
    '/': (prev, next) => prev / next,
    '*': (prev, next) => prev * next,
    '+': (prev, next) => prev + next,
    '-': (prev, next) => prev - next,
    '=': (prev, next) => next
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        {displayValue}
      </div>
      <div className="calculator-keypad">
        <button onClick={clearDisplay}>AC</button>
        <button onClick={() => performOperation('/')}>/</button>
        <button onClick={() => performOperation('*')}>*</button>
        <button onClick={() => performOperation('-')}>-</button>
        <button onClick={() => performOperation('+')}>+</button>
        <button onClick={() => performOperation('=')}>=</button>
        <button onClick={() => inputDigit(0)}>0</button>
        <button onClick={() => inputDigit(1)}>1</button>
        <button onClick={() => inputDigit(2)}>2</button>
        <button onClick={() => inputDigit(3)}>3</button>
        <button onClick={() => inputDigit(4)}>4</button>
        <button onClick={() => inputDigit(5)}>5</button>
        <button onClick={() => inputDigit(6)}>6</button>
        <button onClick={() => inputDigit(7)}>7</button>
        <button onClick={() => inputDigit(8)}>8</button>
        <button onClick={() => inputDigit(9)}>9</button>
        <button onClick={inputDot}>.</button>
      </div>
    </div>
  );
}

export default Calculator;
