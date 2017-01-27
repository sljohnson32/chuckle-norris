
import React from 'react';
import './parentalcontrols-styles';

const ParentalControls = (props) => {
  const { parentalControls, updateControls } = props;
  return (
    <div className='parental-controls'>
      <h3 className='parental-controls'>Parental Controls: </h3>
      <section className='slider-container'>
        <label className="switch">
          <input
            type="checkbox"
            checked={ parentalControls }
            onClick={ () => updateControls() }
          />
          <div className="slider round"></div>
        </label>
      </section>
    </div>
  );
}

ParentalControls.propTypes = {
  parentalControls: React.PropTypes.bool,
  updateControls: React.PropTypes.func
}

export default ParentalControls;
