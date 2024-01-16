import React from 'react';
import { Container, Row, Col, Image, Card, CardBody, CardTitle, CardText, Form, FormGroup, Input, Label, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Article = (props) => {
    const { article } = props;

    return (
        <article>
            <h1 className="fw-bolder mb-1  text-blue">{props.articleTitle}</h1>

            <div className="mb-2 text-blue">{props.articleDate}</div>

            <img className="img-fluid rounded-3 my-5"src={props.articleImage}></img>

            <p>{props.articleContent}</p>

            <h2 className="comment-title text-blue">
                <span className="comment-count text-blue">{props.articleComments}</span> commentaire(s)
            </h2>
        </article>
    );
};

export default Article;