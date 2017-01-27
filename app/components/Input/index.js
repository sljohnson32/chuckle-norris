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

Input.propTypes = {
  name: React.PropTypes.string,
  type: React.PropTypes.string,
  handleChange: React.PropTypes.func,
  val: React.PropTypes.string
}

export default Input;
