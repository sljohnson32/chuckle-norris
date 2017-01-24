import React from 'react';
import { Link } from 'react-router';
import './header-style';

import Button from '../Button/Button';

const logStuff = () => {
  console.log("clicked!");
}

const Header = () => {
  return (
    <div>
      <section className="container-header">
        <h1>Chuckle Norris</h1>
        <h4>The internet's most Delta Farce joke machine.</h4>
      </section>
      <Button btnText={<Link to='/settings'> Settings </Link>} />
    </div>
  );
}

export default Header;
