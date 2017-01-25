import React from 'react';

const Input = (props) => {
  const { name, handleChange, num } = props;
  return (
    <input
      className={name}
      type='number'
      value={num}
      onChange={ (e) => handleChange(e.target.value) }
    />
  );
}

export default Input;
