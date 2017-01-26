import React, { Component } from 'react';
import Home from '../Home';
import JokeCard from '../JokeCard';

class Jokes extends Component {

  render() {
    const { handleChange, getJokes, jokes } = this.props;
    const jokeCards = jokes.length > 0 ? jokes.map((joke, i) => <JokeCard key={ i } joke={ joke } />) : null;
    return (
      <div>
        <Home handleChange={ handleChange } getJokes={ getJokes } />
        {jokeCards}
      </div>
    );
  }
}

export default Jokes;
