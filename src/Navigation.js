import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {

  handleSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
  }

  render() {
    return (
      <div>
        <Nav bsStyle="pills" justified activeKey={1} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="/home">HomePage</NavItem>
          <NavItem eventKey={2} title="Item">About Me</NavItem>
          <NavItem eventKey={3} disabled>Others</NavItem>
        </Nav>
      </div>
    );
  }
}

export { Navigation };
