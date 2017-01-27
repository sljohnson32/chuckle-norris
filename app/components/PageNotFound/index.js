import React, { Component } from 'react';
import { Link } from 'react-router';
import './pagenotfound-style';

export const PageNotFound = (props) => {
  return (
    <div>
      <h1>404 - Page: {props.params.splat} Not Found </h1>
      <h4><Link to='/'>Go back to jokes, jokes, jokes...</Link></h4>
    </div>
  )
}
