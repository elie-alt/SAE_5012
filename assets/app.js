// /*
//  * Welcome to your app's main JavaScript file!
//  *
//  * We recommend including the built version of this JavaScript file
//  * (and its CSS file) in your base layout (base.html.twig).
//  */

// // any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';

// // start the Stimulus application
// import './bootstrap';



// // Importer votre composant principal React
// import Article from './react/controllers/Article.jsx';

// //gestion des composants
// import { registerReactControllerComponents } from '@symfony/ux-react';
// registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));

// document.addEventListener('DOMContentLoaded', () => {
    
//     // Initialiser le composant React et le rendre dans le DOM
//     ReactDOM.render(
//         <React.StrictMode>
//             <Article />
//         </React.StrictMode>,
        
//     );

//     new App();

// });

// class App {
//     constructor() {
//         this.handleCommentForm();
//     }

//     handleCommentForm() {
//         const commentForm = document.querySelector('form.comment-form');

//         if (null === commentForm) {
//             return;
//         }

//         commentForm.addEventListener('submit', async (e) => {
//             e.preventDefault();

//             const response = await fetch('/ajax/comments', {
//                 method: 'POST',
//                 body: new FormData(e.target)
//             });

//             if (!response.ok) {
//                 return;
//             }

//             const json = await response.json();

//             if (json.code === 'COMMENT_ADDED_SUCCESSFULLY') {
//                 const commentList = document.querySelector('.comment-List');
//                 const commentCount = document.querySelector('.comment-count');
//                 const commentContent = document.querySelector('#document_content');
//                 commentList.insertAdjacentHTML('afterbegin', json.message);
//                 commentContent.innerText = json.numberOfComments;
//                 commentContent.value = '';
//             }
//         });
//     }
// }

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
import Article from './react/controllers/Article.jsx';

// Gestion des composants React
import { registerReactControllerComponents } from '@symfony/ux-react';
registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));

document.addEventListener('DOMContentLoaded', () => {
    // Initialiser le composant React et le rendre dans le DOM
    ReactDOM.render(
        <React.StrictMode>
        </React.StrictMode>,
        document.getElementById('root')
    );

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
                const commentList = document.querySelector('.comment-List');
                const commentCount = document.querySelector('.comment-count');
                const commentContent = document.querySelector('#document_content');
                commentList.insertAdjacentHTML('afterbegin', json.message);
                commentContent.innerText = json.numberOfComments;
                commentContent.value = '';
            }
        });
    }
}
