import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from '../../theme-context';


const Article = (props) => {
    const { articleTitle, articleDate, articleImage, articleContent, articleComments,articleCategorie } = props;
    const { theme } = useContext(ThemeContext);

    return (

        <div
        className="col-lg-10 offset-lg-1" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <article>
                <h1 className="fw-bolder mb-1  text-blue">{articleTitle}</h1>

                <div className="fst-italic mb-2 text-blue">{articleDate} / {articleCategorie}</div>

                <img className="img-fluid rounded-3 my-5" src={articleImage}></img>
                <section className="mb-5">
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