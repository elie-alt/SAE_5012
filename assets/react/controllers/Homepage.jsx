import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Card, Badge } from 'react-bootstrap';

// Assurez-vous que le chemin d'importation de l'image est correct
const backgroundImage = 'https://www.programas-gratis.net/blog/wp-content/uploads/2015/04/teclado.jpg';

function App(props) {
  return (
    <div className="d-flex flex-column">
      <main className="flex-shrink-0">
        <section className="py-5">
          <Container>
            <h1 className="fw-bolder fs-5 mb-4">Construire son propre site web</h1>
            <Card className="border-0 shadow rounded-3 overflow-hidden position-relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
              <div className="row gx-0">
                <div className="col-lg-6 col-xl-5 py-lg-5">
                  <Card.Body className="p-4 p-md-5">
                    <Badge className="bg-gradient rounded-pill mb-2 bg-primary">News</Badge>
                    <div className="h2 fw-bolder text-white">Avec Cms tu peux créer ton site web en quelques clics</div>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...</p>
                    <a className="stretched-link text-decoration-none yext-primary" href="#!">
                      Read more
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
    </div>
  );
}

export default App;
