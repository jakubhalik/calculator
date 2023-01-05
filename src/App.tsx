import React, { useState } from 'react'
import './App.scss'

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [lastInput, setLastInput] = useState('');
  const [previousCalculation, setPreviousCalculation] = useState('');
  const [isActive, setIsActive] = useState(false);

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.key
    
    if(value === '+' || value === '-' || value === '*' || value === '/' || value === '.' || value === '0' || value === '(' || value === ')' || +value) {
      if ((value === '+' && input.length === 0) || (value === '/' && input.length === 0) || (value === '*' && input.length === 0) || (value === ')' && input.length === 0)) {
        return;
      }
      let firstChar = input[0];
      if (value !== '.' && value !== '/' && value !== '*' && value !== '+' && value !== '-' && firstChar === '0' && input.length === 1) {
        return;
      }
      const inputArray = input.split('');
      const periodCount = inputArray.filter(char => char === '.').length;
      const operatorCount = inputArray.filter(char => char === '+' || char === '-' || char === '*' || char === '/').length;
      if (value === '.' && input.includes('.')) {
        if (operatorCount < periodCount) {
          return;
        }
        if (firstChar === '-' && operatorCount <= periodCount) {
          return;
        }
      }
      let lastChar = input[input.length - 1];
      if ((value === '(' && lastChar === ')') || 
          (value === ')' && lastChar === '(') || (value === ')' && lastChar === '.') || (value === ')' && lastChar === '+') || (value === ')' && lastChar === '-') || (value === ')' && lastChar === '/') || (value === ')' && lastChar === '*') ||
          (value === '.' && lastChar === '(') || (value === '.' && lastChar === ')') || (value === '.' && lastChar === '.') || (value === '.' && lastChar === '+') || (value === '.' && lastChar === '-') || (value === '.' && lastChar === '/') || (value === '.' && lastChar === '*') ||
          (value === '+' && lastChar === '(') || (value === '+' && lastChar === '+') || (value === '+' && lastChar === '.') || (value === '+' && lastChar === '-') || (value === '+' && lastChar === '/') || (value === '+' && lastChar === '*') || 
          (value === '-' && lastChar === '-') || (value === '-' && lastChar === '.') || (value === '-' && lastChar === '+') || (value === '-' && lastChar === '/') ||
          (value === '/' && lastChar === '(') || (value === '/' && lastChar === '/') || (value === '/' && lastChar === '.') || (value === '/' && lastChar === '-') || (value === '/' && lastChar === '+') || (value === '/' && lastChar === '*') ||
          (value === '*' && lastChar === '(') || (value === '*' && lastChar === '*') || (value === '*' && lastChar === '.') || (value === '*' && lastChar === '-') || (value === '*' && lastChar === '+') || (value === '*' && lastChar === '/')){
        return;
      } 
      setInput(input + value);
    }

    if (value === 'Backspace') {
      setLastInput('CE');
      let equation = input;
      equation = equation.slice(0, -1);
      setInput(equation);
    }
    if (value === 'Enter') {
      let equation = input;
      let lastChar = equation; 
      // Replace all instances of x and ÷ with * and / respectively. This can be done using regex and the 'g' tag which will replace all instances of the matched character/substring
      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
      // Checking the last character of the equation. If it's an operator or a decimal, remove it
      if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '.') {
        equation = equation.replace(/.$/, '');
      }
      if (equation) {
        setResult(eval(equation));
        // Check for the last input and set it to the result if it is "=" or "Enter"
        if (lastInput === '=' || lastInput === 'Enter') {
          setInput(result);
          setPreviousCalculation(result);
        } else {
          setInput('');
          setPreviousCalculation(input);
        }
      }
      return;
    }
  }
  
  const handleButtonPress = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLastInput(e.currentTarget.name as string)
    
    if (e.currentTarget.name === '=') {
      let equation = input;
      let lastChar = equation[equation.length - 1]; 
      // Replace all instances of x and ÷ with * and / respectively. This can be done using regex and the 'g' tag which will replace all instances of the matched character/substring
      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
      // Checking the last character of the equation. If it's an operator or a decimal, remove it
      if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '.') {
        equation = equation.replace(/.$/, '');
      }
      if (equation) {
        setResult(eval(equation));
        // Check for the last input and set it to the result if it is "=" or "Enter"
        if (lastInput === '=' || lastInput === 'Enter') {
          setInput(result);
          setPreviousCalculation(result);
          // Update the buttons with the result
          result.split('').forEach(num => {
            document.getElementById(num)?.click();
          })
        } else {
          setInput('');
          setPreviousCalculation(input);
        }
      }
      return;
    }
  
    if (e.currentTarget.name === 'CE') {
      let equation = input;
      equation = equation.slice(0, -1);
      setInput(equation);
    }
    if (e.currentTarget.name === 'DEL') {
      setInput('');
      setResult('');
    }
    let lastChar = input[input.length - 1];
    let firstChar = input[0];
    if (e.currentTarget.name !== '.' && e.currentTarget.name !== '/' && e.currentTarget.name !== '*' && e.currentTarget.name !== '+' && e.currentTarget.name !== '-' && firstChar === '0' && input.length === 1) {
      return;
    }
    const inputArray = input.split('');
      const periodCount = inputArray.filter(char => char === '.').length;
      const operatorCount = inputArray.filter(char => char === '+' || char === '-' || char === '*' || char === '/').length;
      if (e.currentTarget.name === '.' && input.includes('.')) {
        if (operatorCount < periodCount) {
          return;
        }
        if (firstChar === '-' && operatorCount <= periodCount) {
          return;
        }
      }
    if ((e.currentTarget.name === '+' && input.length === 0) || (e.currentTarget.name === '/' && input.length === 0) || (e.currentTarget.name === '*' && input.length === 0) || 
        (e.currentTarget.name === ')' && input.length === 0)) {
      return;
    }
    if ((e.currentTarget.name === '(' && lastChar === ')') || 
          (e.currentTarget.name === ')' && lastChar === '(') || (e.currentTarget.name === ')' && lastChar === '.') || (e.currentTarget.name === ')' && lastChar === '+') || (e.currentTarget.name === ')' && lastChar === '-') || (e.currentTarget.name === ')' && lastChar === '/') || (e.currentTarget.name === ')' && lastChar === '*') ||
          (e.currentTarget.name === '.' && lastChar === '(') || (e.currentTarget.name === '.' && lastChar === ')') || (e.currentTarget.name === '.' && lastChar === '.') || (e.currentTarget.name === '.' && lastChar === '+') || (e.currentTarget.name === '.' && lastChar === '-') || (e.currentTarget.name === '.' && lastChar === '/') || (e.currentTarget.name === '.' && lastChar === '*') ||
          (e.currentTarget.name === '+' && lastChar === '(') || (e.currentTarget.name === '+' && lastChar === '+') || (e.currentTarget.name === '+' && lastChar === '.') || (e.currentTarget.name === '+' && lastChar === '-') || (e.currentTarget.name === '+' && lastChar === '/') || (e.currentTarget.name === '+' && lastChar === '*') || 
          (e.currentTarget.name === '-' && lastChar === '-') || (e.currentTarget.name === '-' && lastChar === '.') || (e.currentTarget.name === '-' && lastChar === '+') || (e.currentTarget.name === '-' && lastChar === '/') ||
          (e.currentTarget.name === '/' && lastChar === '(') || (e.currentTarget.name === '/' && lastChar === '/') || (e.currentTarget.name === '/' && lastChar === '.') || (e.currentTarget.name === '/' && lastChar === '-') || (e.currentTarget.name === '/' && lastChar === '+') || (e.currentTarget.name === '/' && lastChar === '*') ||
          (e.currentTarget.name === '*' && lastChar === '(') || (e.currentTarget.name === '*' && lastChar === '*') || (e.currentTarget.name === '*' && lastChar === '.') || (e.currentTarget.name === '*' && lastChar === '-') || (e.currentTarget.name === '*' && lastChar === '+') || (e.currentTarget.name === '*' && lastChar === '/')){
        return;
      } 
    if (e.currentTarget.name !== 'DEL' && e.currentTarget.name !== 'CE') {
      setInput(input + e.currentTarget.name);
    }
  };
   
  return (
    <body>
      <div className="calculator">
         <div className="calculator__grid">
          <div className="calculator__output">
            <input className="calculator__previous-operand" type="text" value={previousCalculation} 
            onClick={() => setInput(previousCalculation)} />
          <input placeholder="Calculation" name="currentOperation" className="calculator__current-operand" 
          type="text" value={input || result} onKeyDown={keyPress} />
          </div>
          <button name="(" className="calculator__digit" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>(</p>
          </button>
          <button name=")" className="calculator__digit" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>)</p>
          </button>
          <button name="CE" className="calculator__CE-and-DEL-and-enter" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>CE</p>
          </button>
          <button name="DEL" className="calculator__CE-and-DEL-and-enter" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>DEL</p>
          </button>
          <button name="1" className="calculator__digit" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>1</p>
          </button>
          <button name="2" className="calculator__digit" onClick={handleButtonPress}
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>2</p>
          </button>
          <button name="3" className="calculator__digit" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>3</p>
          </button>
          <button name="/" className="calculator__operator" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>/</p>
          </button>
          <button name="4" className="calculator__digit" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>4</p>
          </button>
          <button name="5" className="calculator__digit" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>5</p>
          </button>
          <button name="6" className="calculator__digit" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>6</p>
          </button>
          <button name="*" className="calculator__operator" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>*</p>
          </button>
          <button name="7" className="calculator__digit" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>7</p>
          </button>
          <button name="8" className="calculator__digit" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>8</p>
          </button>
          <button name="9" className="calculator__digit" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>9</p>
          </button>
          <button name="+" className="calculator__operator" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>+</p>
          </button>
          <button name="0" className="calculator__digit" onClick={handleButtonPress} 
          onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>0</p>
          </button>
          <button name="." className="calculator__digit" onClick={handleButtonPress} 
           onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>.</p>
          </button>
          <button name="=" className="calculator__CE-and-DEL-and-enter" onClick={handleButtonPress} 
           onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>=</p>
          </button>
          <button name="-" className="calculator__operator" onClick={handleButtonPress} 
           onMouseDown={() => setIsActive(true)} onMouseUp={() => setIsActive(false)}>
            <p className={isActive ? 'active' : ''}>-</p>
          </button>
       </div>
      </div>
    </body>
  );
};

export default Calculator