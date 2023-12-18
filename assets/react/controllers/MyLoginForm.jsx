import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const MyLoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mt-5">
            <Card.Body>
              <h6 className="mb-4">
                <span onClick={handleToggle} style={{ cursor: 'pointer' }}>
                  Log In
                </span>
                <span onClick={handleToggle} style={{ cursor: 'pointer' }}>
                  Sign Up
                </span>
              </h6>
              <Form onSubmit={handleSubmit}>
                {/* Common Form Fields */}
                {isLogin ? (
                  <>
                    {/* Login Form Fields */}
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Your Password" />
                    </Form.Group>
                  </>
                ) : (
                  <>
                    {/* Sign Up Form Fields */}
                    <Form.Group controlId="formBasicName">
                      <Form.Control type="text" placeholder="Your Full Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Your Password" />
                    </Form.Group>
                  </>
                )}

                <Button variant="primary" type="submit" className="mt-3">
                  Submit
                </Button>
              </Form>
              <p className="mt-4 text-center">
                <a href="#0" className="link">
                  Forgot your password?
                </a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyLoginForm;
