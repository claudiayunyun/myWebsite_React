import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Navigation extends Component {

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

export { Navigation };
