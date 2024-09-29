import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import HeaderLogo from '../Images/HeaderLogoImage.png'

export default function NavBar() {
  return (
    <Navbar fixed='top' expand="lg" className="bg-body-tertiary " data-bs-theme="dark">
      <Container>
      <Navbar.Brand as={Link} to="/">
            <img
              src= {HeaderLogo}
              width="180"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="">Home</Nav.Link>
            <Nav.Link as={Link} to="">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="">Another action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
