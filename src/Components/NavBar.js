import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap"

import '../styles/navbar.css'

export const NavBar = () => {
    return(
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">
                            <Image className='image' src='./images/yunyun_icon.png' responsive />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="#">
                        Home
                    </NavItem>
                    <NavDropdown eventKey={3} title="About Me" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Resume</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={2} href="#">
                        Others
                    </NavItem>
                    </Nav>
                    <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        English
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        中文
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}