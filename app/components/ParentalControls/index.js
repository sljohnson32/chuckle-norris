import React from 'react';

const ParentalControls = (props) => {
  const { parentalControls, updateControls } = props;
  return (
    <button
      onClick={ () => updateControls() }
    >Update Parental Controls</button>
  );
}

export default ParentalControls;
