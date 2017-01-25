import React from 'react';

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick() }>{props.btnText}</button>
  );
}

export default Button;
