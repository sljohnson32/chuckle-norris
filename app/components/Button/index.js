import React from 'react';
import './button-style';

const Button = (props) => {
  const { name, func, btnText } = props;
  return (
    func ?
      <button
        className={ name }
        onClick={ () => func() }
      >{ btnText }</button>
      :
      <button
        className={ name }
      >{ btnText }</button>
  );
}

export default Button;
