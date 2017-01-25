import React from 'react';

const Button = (props) => {
  const { name, btnText } = props;
  return (
    <button className={name}>{btnText}</button>
  );
}

export default Button;
