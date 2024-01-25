/*
 * Bienvenue dans le fichier JavaScript principal de votre application !
 *
 * Nous recommandons d'inclure la version construite de ce fichier JavaScript
 * (et de son fichier CSS) dans votre mise en page de base (base.html.twig).
 */

// Tout le CSS que vous importez sera regroupé dans un seul fichier CSS (app.css dans ce cas)
import './styles/app.css';

// Démarrer l'application Stimulus
import './bootstrap';

// Importer vos composants React
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './theme-context';
import ButtonTheme from './react/controllers/Button';


// Gestion des composants React
import { registerReactControllerComponents } from '@symfony/ux-react';
import Header from './react/controllers/Header';
import { Navbar } from 'react-bootstrap';
import NavbarMenu from './react/controllers/NavbarConnect';
import Article from './react/controllers/Article';
import Footer from './react/controllers/Footer';
registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <React.StrictMode>
            <ThemeProvider>
                <ButtonTheme />
                <Header />
                {/* <NavbarMenu /> */}
                {/* <Article
                    articleTitle={article.title}
                    articleDate={article.createdAt}
                    articleImage={`/media/${article.featuredImage.filename}`}
                    articleContent={article.content}
                    articleComments={article.comments.length}
                    articleCategory={article.categories}
                    theme={theme}
                /> */}
            </ThemeProvider>
        </React.StrictMode>,
        document.getElementById('header')
    );

    // ReactDOM.render(
    //     <React.StrictMode>
    //         <ThemeProvider>
    //             <ButtonTheme />
    //             <Footer />
    //         </ThemeProvider>

    //     </React.StrictMode>,
    //     document.getElementById('footer')
    // );

    const appInstance = new App();
    appInstance.handleCommentForm();
});

class App {
    constructor() {
        this.handleCommentForm();
    }

    handleCommentForm() {
        const commentForm = document.querySelector('form.comment-form');

        if (null === commentForm) {
            return;
        }

        commentForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const response = await fetch('/ajax/comments', {
                method: 'POST',
                body: new FormData(e.target)
            });

            if (!response.ok) {
                return;
            }

            const json = await response.json();

            if (json.code === 'COMMENT_ADDED_SUCCESSFULLY') {
                const commentList = document.querySelector('.comment-list');
                console.log(commentList);
                const commentCount = document.querySelector('.comment-count');
                const commentContent = document.querySelector('#comment_content');
                commentList.insertAdjacentHTML('afterbegin', json.message);
                commentCount.innerText = json.numberOfComments;
                commentContent.value = '';
            }
        });
    }
}
