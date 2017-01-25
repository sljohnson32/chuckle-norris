import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../Header'
import RandomJoke from '../RandomJoke'
import '../../styles'

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke: '',
    };
  }

  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random/1?escape=javascript').then((response) => {
      return response.json();
      debugger
    }).then((data) => {
      this.setState({ randomJoke: data.value[0].joke })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <RandomJoke randomJoke={this.state.randomJoke} />
        <div className='app-stuff'>
          {React.cloneElement(this.props.children, { jokes: this.state.jokes })}
        </div>
      </div>
    );
  }
}

export default App;
