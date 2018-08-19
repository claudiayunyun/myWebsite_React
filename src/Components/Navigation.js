import React from 'react';
import { Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap"

export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Nav bsStyle="pills" justified >
          <LinkContainer to="/">
            <NavItem>Home</NavItem>
          </LinkContainer>
          <NavDropdown title="About Me" id="nav-dropdown">
            <LinkContainer to="/introduction">
              <MenuItem >Introduction</MenuItem>
            </LinkContainer>
            <LinkContainer to='/colorfullife'>
              <MenuItem>Colorful Life</MenuItem>
            </LinkContainer>
            <LinkContainer to='/favourites'>
              <MenuItem>Favourites</MenuItem>
            </LinkContainer>
            <MenuItem divider />
            <LinkContainer to='/resume'>
              <MenuItem>Resume</MenuItem>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to='/others'>
            <NavItem title="Item">Others</NavItem>
          </LinkContainer>
        </Nav>
      </div>
    );
  }
}

