import React from 'react';
import '../App.js';

 
const CustomBtn = (props) => {
  const { onClick, children, buttonColor } = props;
  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={onClick}
      className='Button'
    >
      {children}
    </button>
  );
};
 
export default CustomBtn;