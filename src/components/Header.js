import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-center">
        <Navbar.Brand href="#home" className="fs-3">
          Breast Surgery Guide
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
