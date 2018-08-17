import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem, Navbar} from 'react-bootstrap';

export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Nav bsStyle="pills" justified >
          <NavItem href="">HomePage</NavItem>
          <NavDropdown title="About Me" id="nav-dropdown">
            <MenuItem >Introduction</MenuItem>
            <MenuItem >Colorful Life</MenuItem>
            <MenuItem >Favourites</MenuItem>
            <MenuItem divider />
            <MenuItem href="">Resume</MenuItem>
          </NavDropdown>
          <NavItem title="Item">Others</NavItem>
        </Nav>
      </div>
    );
  }
}

