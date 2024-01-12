<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use App\Repository\CommentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(ArticleRepository $articlerepo, CategoryRepository $categoryrepo): Response
    {
        return $this->render('baseHome.html.twig', [
            'articles' => $articlerepo->findAll(),
            'categories' => $categoryrepo->findAll(),
        ]);
    }

    #[Route('/articles_home', name: 'app_home_articles')]
    public function index_home(ArticleRepository $articlerepo, CategoryRepository $categoryrepo): Response
    {
        return $this->render('baseArticles.html.twig', [
            'articles' => $articlerepo->findAll(),
            'categories' => $categoryrepo->findAll(),
        ]);
    }
}