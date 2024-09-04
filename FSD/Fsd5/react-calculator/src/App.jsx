import React, { useState } from 'react';
import './styles.css';

function Button({ value, onClick }) {
    return (
        <button className="button" onClick={() => onClick(value)}>
            {value}
        </button>
    );
}

function Display({ value }) {
    return (
        <div className="display">
            {value}
        </div>
    );
}

function App() {
    const [input, setInput] = useState(''); 
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input)); // Avoid using eval in production
            } catch {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <Display value={input || '0'} />
            <Display value={result} />
            <div className="buttons">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
                    <Button key={btn} value={btn} onClick={handleClick} />
                ))}
                <Button value="C" onClick={handleClick} />
            </div>
        </div>
    );
}

export default App;

