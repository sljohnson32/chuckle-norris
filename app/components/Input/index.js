import React from 'react';

const Input = (props) => {
  const { name, type, handleChange, val } = props;
  return (
    <input
      className={ name }
      type={ type }
      value={ val }
      onChange={ (e) => handleChange(e.target.value) }
    />
  );
}

export default Input;
