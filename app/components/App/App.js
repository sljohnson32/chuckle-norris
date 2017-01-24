import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../Header/Header'
import '../../styles'

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes: null,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className='app-stuff'>
          {React.cloneElement(this.props.children, { jokes: this.state.jokes })}
        </div>
      </div>
    );
  }
}

export default App;
