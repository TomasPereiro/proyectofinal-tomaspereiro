import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

export function NavBar() {

 
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Link to='/'>The Beach</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer to="/categories/ropa">
          <Nav.Link className="mr-2">Ropa</Nav.Link> 
        </LinkContainer>
        <LinkContainer to="/categories/accesorios">
          <Nav.Link className="mr-2">Accesorios</Nav.Link> 
        </LinkContainer>
        <LinkContainer to="/categories/joyeria">
          <Nav.Link className="mr-2">Joyeria</Nav.Link> 
        </LinkContainer>
        <LinkContainer to="/cart">
          <Nav.Link>Carrito</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  
    )
  }