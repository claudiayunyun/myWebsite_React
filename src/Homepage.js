import React, { Component } from 'react';
import { Navigation } from './Navigation'
import { Nav, NavItem } from 'react-bootstrap';


class Homepage extends Component {

  render() {
    return (
      <div>
        <img src='./yunyun_icon.png' />
        <Navigation />
        <header>
          <h1>Welcome to Yunyun Website</h1>
        </header>
        <p>
          Have Fun
        </p>
      </div>
    );
  }
}

export { Homepage };