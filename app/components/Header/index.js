import React from 'react';
import { Link } from 'react-router';
import './header-style';

import Button from '../Button';

const Header = () => {
  return (
    <div className='header'>
      <section className="container-header">
        <h1>Chuckle Norris</h1>
        <h4>The internet's most Delta Farce joke machine.</h4>
      {window.location.hash === '#/settings' ?
        <Button
          name={'settings-btn'}
          btnText={<Link to='/jokes'>
          Jokes </Link>}
        />
        :
        <Button
          name={'settings-btn'}
          btnText={<Link to='/settings'>
          Settings </Link>}
        />}
        </section>
    </div>
  );
}

export default Header;
