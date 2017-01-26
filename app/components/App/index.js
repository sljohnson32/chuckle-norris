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
      newName: '',
      displayName: '',
      num: ''
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

  handleNumChange(newVal) {
    this.setState({ num: newVal });
  }

  updateName(newName) {
    this.setState({ newName });
  }

  setDisplayName() {
    this.setState({ displayName: this.state.newName });
  }

  render() {
    return (
      <div>
        <Header />
        <RandomJoke randomJoke={this.state.randomJoke} />
        <div className='app-stuff'>
        {React.cloneElement(this.props.children, {
          newName: this.state.newName,
          updateName: this.updateName.bind(this),
          setDisplayName: this.setDisplayName.bind(this),
          handleChange: this.handleNumChange.bind(this),
          num: this.state.num
        })}
        </div>
      </div>
    );
  }
}

export default App;
