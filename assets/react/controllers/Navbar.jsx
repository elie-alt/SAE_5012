import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/app.css';

import '../../styles/custom-bootstrap.css';


function NavbarMenu(props) {
  return (
    //     <Navbar collapseOnSelect expand="lg" className="">
    //   <Container className="m-0">
    //     <Navbar.Brand href={props.LinkBrand}>Le nom de notre start-up</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link style={{ color: '#F2F2F2' }} href={props.LinkArticleShow}>
    //           Articles
    //         </Nav.Link>
    //         <Nav.Link style={{ color: '#F2F2F2' }} href="#pricing">
    //           Pricing
    //         </Nav.Link>
    //       </Nav>
    //       <Nav className="me-0">
    //         <Nav.Link style={{ color: '#F2F2F2' }} href={props.LinkSignIn}>
    //           Se connecter
    //         </Nav.Link>
    //         <Nav.Link style={{ color: '#F2F2F2' }} href={props.LinkSignUp}>
    //           S'inscrire
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href={props.LinkBrand}>CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href={props.LinkHome}>Accueil</Nav.Link>
            <Nav.Link href={props.LinkArticleShow}>Les articles</Nav.Link>
            <Nav.Link href={props.LinkBrand}>Contact</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarMenu;