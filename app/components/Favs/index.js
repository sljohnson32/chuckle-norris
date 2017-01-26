import React, { Component } from 'react';
import Home from '../Home';
import JokeCard from '../JokeCard';

class Favs extends Component {

  render() {
    const { favJokes, setFav, handleChange, getJokes } = this.props;
    const favJokeCards = favJokes.length > 0 ? favJokes.map((joke, i) => <JokeCard key={ i } joke={ joke } setFav={ setFav } />) : <h2>You do not have any favorite jokes selected</h2>;
    return (
      <div>
        <Home handleChange={ handleChange } getJokes={ getJokes } />
        {favJokeCards}
      </div>
    );
  }
}

export default Favs;
