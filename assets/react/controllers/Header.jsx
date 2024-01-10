import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="bg-dark py-5">
      <Container className="px-5">
        <Row className="gx-5 align-items-center justify-content-center">
          <Col lg={8} xl={7} xxl={6}>
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-5 fw-bolder text-white mb-2">
                A Bootstrap 5 template for modern businesses
              </h1>
              <p className="lead fw-normal text-white-50 mb-4">
                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <Button className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">
                  Get Started
                </Button>
                <Button className="btn btn-outline-light btn-lg px-4" href="#!">
                  Learn More
                </Button>
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

export default Header;
