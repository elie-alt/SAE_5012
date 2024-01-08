<?php

namespace App\Controller;

use App\Entity\Article;
use App\Form\ArticleType;
use App\Repository\ArticleRepository;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController extends AbstractController
{

    #[Route('/article/{slug}', name: 'article_show')]
    public function show(?Article $article): Response
    {
        if (!$article){
            return $this->redirectToRoute('app_home');
        }
        return $this->render('article/index.html.twig', [
            'article' => $article,
        ]);
    }

    #[Route('/articles', name: 'articles_show')]
    public function show_articles(?Article $article): Response
    {
        if (!$article){
            return $this->redirectToRoute('app_home');
        }
        return $this->render('article/index.html.twig', [
            'article' => $article,
        ]);
    }
}
