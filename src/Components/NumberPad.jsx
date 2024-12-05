import React from 'react';
import Button from './Button';
function NumberPad({ displayValue, setDisplayValue }) {
  const handleClick = (value) => {
    if (value === 'C') {
      setDisplayValue('');
    } else if (value === '=') {
      try {
        setDisplayValue(eval(displayValue).toString()); // Avoid using eval in production
      } catch {
        setDisplayValue('Error');
      }
    }else if (value == "Delete"){
        setDisplayValue(displayValue.slice(0, -1));
    }else {
      setDisplayValue(displayValue + value);
    }
  };

  const buttons = [
    'C', '/', '*', '-',
    '7', '8', '9', '+',
    '4', '5', '6', '=',
    '1', '2', '3', '0', 
    '.','Delete'
  ];

  const buttonStyles = (button) => {
    if (button === 'C') return 'bg-red-400 hover:bg-red-600 text-white';
    if (button === 'Delete') return 'bg-red-400 hover:bg-red-600 text-white';
    if (['/', '*', '-', '+', '='].includes(button)) return 'bg-red-400 hover:bg-red-600 text-white';
    if (button === '.') return 'bg-red-400 hover:bg-red-600 text-white';
    return 'bg-blue-400 hover:bg-blue-600 text-white'; // Default for numbers
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleClick(button)}
          className={`${buttonStyles(button)}} font-semibold py-3 px-4 flex justify-center items-center rounded-lg shadow-lg transition-transform hover: scale-105`}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default NumberPad;

