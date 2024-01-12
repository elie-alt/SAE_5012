import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Article(props) {
    return (
        <Container className="px-5 my-5">
            <Row className="gx-5">
                <div className="col-lg-10 offset-lg-1">
                    <header
                        className="mb-4">
                        <h1 className="fw-bolder mb-1">{ props.ArticleTitle }</h1>

                        <div className="text-muted fst-italic mb-2"></div>
                    </header>
                    <figure className="mb-4"><img className="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>
                    <section className="mb-5">
                    </section>
                    <h2 className="comment-title">
                        <span className="comment-count"></span> commentaire(s)
                    </h2>
                </div>
            </Row >
        </Container >
    );
};