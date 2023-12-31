import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const NewsSection = () => {
    return (
        <section className="py-5 bg-light">
            <Container className="px-5">
                <Row className="gx-5">
                    <Col xl={8}>
                        <h2 className="fw-bolder fs-5 mb-4">News</h2>
                        {/* News item*/}
                        <div className="mb-4">
                            <div className="small text-muted">May 12, 2023</div>
                            <a className="link-dark" href="#!"><h3>Start Bootstrap releases Bootstrap 5 updates for templates and themes</h3></a>
                        </div>
                        {/* News item*/}
                        <div className="mb-5">
                            <div className="small text-muted">May 5, 2023</div>
                            <a className="link-dark" href="#!"><h3>Bootstrap 5 has officially landed</h3></a>
                        </div>
                        {/* News item*/}
                        <div className="mb-5">
                            <div className="small text-muted">Apr 21, 2023</div>
                            <a className="link-dark" href="#!"><h3>This is another news article headline, but this one is a little bit longer</h3></a>
                        </div>
                        <div className="text-end mb-5 mb-xl-0">
                            <a className="text-decoration-none" href="#!">
                                More news
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <Card className="border-0 h-100">
                            <Card.Body className="p-4">
                                <div className="d-flex h-100 align-items-center justify-content-center">
                                    <div className="text-center">
                                        <div className="h6 fw-bolder">Contact</div>
                                        <p className="text-muted mb-4">
                                            For press inquiries, email us at
                                            <br />
                                            <a href="#!">press@domain.com</a>
                                        </p>
                                        <div className="h6 fw-bolder">Follow us</div>
                                        <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-twitter"></i></a>
                                        <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-facebook"></i></a>
                                        <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-linkedin"></i></a>
                                        <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-youtube"></i></a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NewsSection;
