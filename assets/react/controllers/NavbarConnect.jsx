import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/app.css';

import '../../styles/custom-bootstrap.css';


function NavbarMenu(props) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href={props.LinkHome}>CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href={props.LinkHome}>Accueil</Nav.Link>
            <Nav.Link href={props.LinkArticleShow}>Les articles</Nav.Link>
            <Nav.Link href={props.LinkSignIn}>Se connecter</Nav.Link>
            <Nav.Link href={props.LinkSignUp}>S'inscrire</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarMenu;