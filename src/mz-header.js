import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default () => {
  return (
    <Navbar collapseOnSelect className="mz-navbar">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Mozambique Profile</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/#executive">Executive Summary</NavItem>
          <NavItem eventKey={2} href="/#description">Description</NavItem>
          <NavItem eventKey={2} href="/#gender">Gender</NavItem>
          <NavItem eventKey={2} href="/#household">Household Size</NavItem>
          <NavItem eventKey={2} href="/#education">Education</NavItem>
          <NavItem eventKey={2} href="/#technology">Technology</NavItem>
          <NavItem eventKey={2} href="/#location">Rural & Urban</NavItem>
          <NavItem eventKey={2} href="/#transportation">Transportation</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}