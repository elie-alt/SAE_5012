<?php

namespace App\Controller;

use App\Entity\Article;
use App\Entity\Comment;
use App\Form\ArticleType;
use App\Form\Type\CommentType;
use App\Service\CommentService;
use App\Repository\ArticleRepository;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController extends AbstractController
{

    #[Route('/article/{slug}', name: 'article_show')]
    public function show(?Article $article, CommentService $commentService): Response
    {
        if (!$article){
            return $this->redirectToRoute('app_home');
        }

        $comment = new Comment($article);

        $commentForm = $this->createForm(CommentType::class, $comment);

        return $this->renderForm('article/index.html.twig', [
            'article' => $article,
            'comments' => $commentService->getPaginatorComments($article),
            'commentForm' => $commentForm,
        ]);
    }

    #[Route('/articles', name: 'articles_show')]
    public function show_articles(?Article $article, CommentService $commentService): Response
    {
        if (!$article){
            return $this->redirectToRoute('app_home');
        }

        $comment = new Comment($article);

        $commentForm = $this->createForm(CommentType::class, $comment);

        return $this->render('article/index.html.twig', [
            'article' => $article,
            'comments' => $commentService->getPaginatorComments($article),
            'commentForm' => $commentForm,
        ]);
    }
}
