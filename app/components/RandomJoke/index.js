import React from 'react';
import './randomjoke-style';

const RandomJoke = (props) => {
  const { randomJoke } = props;
  return (
    <div className='random-joke'>
      { randomJoke }
    </div>
  );
}

RandomJoke.propTypes = {
  randomJoke: React.PropTypes.string
}

export default RandomJoke;
