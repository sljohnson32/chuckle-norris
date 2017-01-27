
import React from 'react';
import './parentalcontrols-styles';

const ParentalControls = (props) => {
  const { parentalControls, updateControls } = props;
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={ () => updateControls() }/>
        <div className="slider round"></div>
      </label>
    </div>
  );
}

export default ParentalControls;

// <button
// onClick={ () => updateControls() }
// >Update Parental Controls</button>
