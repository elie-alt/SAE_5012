import React from 'react';
import { Navbar, Nav, Container, Card, Badge } from 'react-bootstrap';

function App(props) {
  return (
    <div className="d-flex flex-column">
      <main className="flex-shrink-0">
        {/* Navigation */}
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand  href={props.LinkBrand}>CMS</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="ms-auto mb-2 mb-lg-0">
                <Nav.Link  href={props.LinkHome}>Accueil</Nav.Link>
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
        
        {/* Page Content */}
        <section className="py-5">
          <Container>
            <h1 className="fw-bolder fs-5 mb-4">Construire son propre site web</h1>
            <Card className="border-0 shadow rounded-3 overflow-hidden">
              <Card.Body className="p-0">
                <div className="row gx-0">
                  <div className="col-lg-6 col-xl-5 py-lg-5">
                    <Card.Body className="p-4 p-md-5">
                      <Badge bg="primary" className="bg-gradient rounded-pill mb-2">News</Badge>
                      <div className="h2 fw-bolder">Avec Cms tu peux créer ton site web en quelques clics</div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...</p>
                      <a className="stretched-link text-decoration-none" href="#!">
                        Read more
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </Card.Body>
                  </div>
                  <div className="col-lg-6 col-xl-7">
                    <div className="bg-featured-blog" style={{ backgroundImage: 'url("https://dummyimage.com/700x350/343a40/6c757d")' }}></div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </section>

        {/* Add other sections here using React-Bootstrap components */}
      </main>

      {/* Footer */}
      <footer className="bg-dark py-4 mt-auto">
        <Container>
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Your Website 2023</div></div>
            <div className="col-auto">
              <a className="link-light small" href="#!">Privacy</a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">Terms</a>
              <span className="text-white mx-1">&middot;</span>
              <a className="link-light small" href="#!">Contact</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
