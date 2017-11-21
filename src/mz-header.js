import React, { Component } from 'react';
import { Nav, Navbar, MenuItem, NavDropdown } from 'react-bootstrap';

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
          <MenuItem eventKey={1} href="#executive">Summary & Appendix</MenuItem>
          <MenuItem eventKey={2} href="#description">Description</MenuItem>
          <MenuItem eventKey={3} href="#gender">Gender</MenuItem>
          <MenuItem eventKey={4} href="#household">Household</MenuItem>
          <MenuItem eventKey={5} href="#education">Education</MenuItem>
          <MenuItem eventKey={6} href="#technology">Technology</MenuItem>
          <MenuItem eventKey={7} href="#location">Rural/Urban</MenuItem>
          <MenuItem eventKey={8} href="#transportation">Transportation</MenuItem>
          <MenuItem eventKey={8} href="#livingCondition">Living Conditions</MenuItem>
          <MenuItem eventKey={8} href="#inequality">Inequality</MenuItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}