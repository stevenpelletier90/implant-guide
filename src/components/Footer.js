import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <Container className="d-flex justify-content-center">
        <Navbar.Text className="text-center footer-text">
          &copy; {new Date().getFullYear()} Breast Surgery Guide
        </Navbar.Text>
      </Container>
    </footer>
  );
};

export default Footer;
