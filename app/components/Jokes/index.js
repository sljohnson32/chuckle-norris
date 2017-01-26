import React, { Component } from 'react';
import Home from '../Home';

class Jokes extends Component {

  // componentWillMount()

  render() {
    return (
      <div>
        <Home handleChange={ this.props.handleChange } />
        Jokes
      </div>
    );
  }
}

export default Jokes;
