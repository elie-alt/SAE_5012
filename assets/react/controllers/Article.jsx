import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Article = (props) => {
    const { articleTitle, articleDate, articleImage, articleContent, articleComments,articleCategorie } = props;
    return (

        <div
            class="col-lg-10 offset-lg-1">
            <article>
                <header
                    class="mb-4"></header>
                <h1 className="fw-bolder mb-1  text-blue">{articleTitle}</h1>

                <div class="fst-italic mb-2 text-blue">{articleDate} / {articleCategorie}</div>

                <img className="img-fluid rounded-3 my-5" src={articleImage}></img>
                <section class="mb-5">
                    {articleContent}
                </section>

                <h2 className="comment-title text-blue">
                    <span className="comment-count text-blue">{articleComments}</span> commentaire(s)
                </h2>
            </article>
        </div>

    );
};

Article.defaultProps = {
    articleImage: "https://img.freepik.com/vecteurs-premium/vecteur-icone-image-par-defaut-page-image-manquante-pour-conception-site-web-application-mobile-aucune-photo-disponible_87543-11093.jpg",
};

export default Article;