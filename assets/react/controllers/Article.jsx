import React from 'react';
import { Container, Row, Col, Image, Card, CardBody, CardTitle, CardText, Form, FormGroup, Input, Label, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Article = (props) => {
    const { article } = props;

    return (
        <article>
            <div class="container">
                <section class="py-5">
                    <div class="container px-5 my-5">
                        <div class="row gx-5">
                            <div
                                class="col-lg-10 offset-lg-1">
                                <article>
                                    <header
                                        class="mb-4"></header>
                                    <h1 className="fw-bolder mb-1  text-blue">{props.articleTitle}</h1>

                                    <div class="fst-italic mb-2 text-blue">{props.articleDate}</div>

                                    <img className="img-fluid rounded-3 my-5" src={props.articleImage}></img>
                                    <section class="mb-5">
                                        {props.articleContent}
                                    </section>

                                    <h2 className="comment-title text-blue">
                                        <span className="comment-count text-blue">{props.articleComments}</span> commentaire(s)
                                    </h2>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </article>
    );
};

export default Article;