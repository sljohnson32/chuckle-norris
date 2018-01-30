import React, { Component } from 'react';
import { Link } from 'react-router';
import Button from '../Button';
import Input from '../Input';
import './home-style';

class Home extends Component {

  render() {
    const { handleChange, num, getJokes } = this.props;
    return (
      <div className='home'>
        <section className="joke-controller">
          <Button
            name={ 'jokes-btn' }
            disableTrigger={ num == '0' }
            btnText={<Link to='/jokes' className={ num == '0' && 'disable-link' }>Get Jokes</Link>}
            func={ getJokes }
          />
          <Input
            name={ 'num-input' }
            type={ 'number' }
            handleChange={ handleChange }
            val={ num }
          />
        </section>
        <section className='favs'>
          <Button
            name={ 'favs-btn' }
            btnText={ <Link to='/favorites'>Favorites</Link> }
          />
        </section>
        { window.location.pathname === '/' ? <h2>Click Get Jokes!</h2> : <div /> }
        { this.props.children }
      </div>
    );
  }
}

Home.propTypes = {
  handleChange: React.PropTypes.func,
  num: React.PropTypes.string,
  getJokes: React.PropTypes.func
}

export default Home;
