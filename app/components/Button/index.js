import React from 'react';
import './button-style';

const Button = (props) => {
  const { name, func, btnText, disableTrigger } = props;
  console.log(disableTrigger)
  return (
    func ?
      <button
        className={ name }
        disabled={disableTrigger}
        onClick={ () => func() }
      >{ btnText }</button>
      :
      <button
        className={ name }
        disabled={disableTrigger}
      >{ btnText }</button>
  );
}

export default Button;
