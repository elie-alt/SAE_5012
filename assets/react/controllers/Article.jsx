import React from 'react';
import ReactDOM from 'react-dom';

import { Container, Row } from 'react-bootstrap';

const reactContainer = document.getElementById('react-article-container');
const dynamicData = JSON.parse(reactContainer.dataset.dynamicData);


ReactDOM.render(<Article article={dynamicData} />, reactContainer);

export default function Article(props) {
    const { ArticleTitle, ArticleContent, ArticleComment } = props.article; // Correction ici

    return (
        <Container className="px-5 my-5">
            <Row className="gx-5">
                <div className="col-lg-10 offset-lg-1">
                    <header className="mb-4">
                        <h1 className="fw-bolder mb-1">{ArticleTitle}</h1>
                        <div className="text-muted fst-italic mb-2"></div>
                    </header>
                    <figure className="mb-4"><img className="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>
                    <section className="mb-5">
                        {ArticleContent}
                    </section>
                    <h2 className="comment-title">
                        <span className="comment-count">{ArticleComment}</span> commentaire(s)
                    </h2>
                </div>
            </Row>
        </Container>
    );
};
