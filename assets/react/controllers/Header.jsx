import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Header(props){
  return (
    <header className=" py-5">
      <Container className="px-5">
        <Row className="gx-5 align-items-center justify-content-center">
          <Col lg={8} xl={7} xxl={6}>
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-5 text-sand fw-bolder mb-2">
                Créez des CMS sur mesure en un clin d'œil avec notre plateforme intuitive.
              </h1>
              <p className="lead text-sand fw-normal  mb-4">
                Simplicité, flexibilité, puissance : donnez vie à votre vision du contenu web
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <Button className="btn btn-primary btn-lg px-4 me-sm-3" href={props.LinkSignIn}>
                  Se connecter
                </Button>
                <Button className="btn btn-outline-light btn-lg px-4" href={props.LinkSignUp}>
S'inscrire                </Button>
              </div>
            </div>
          </Col>
          <Col xl={5} xxl={6} className="d-none d-xl-block text-center">
            <img
              className="img-fluid rounded-3 my-5"
              src="https://dummyimage.com/600x400/343a40/6c757d"
              alt="..."
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

