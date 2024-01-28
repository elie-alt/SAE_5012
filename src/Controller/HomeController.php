<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use App\Entity\Datas;
use App\Repository\CommentRepository;
use App\Service\ArticleService;
use App\Form\ChartFormType;
use App\Repository\ThemeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\UX\Chartjs\Builder\Line;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

class HomeController extends AbstractController
{

    #[Route('/', name: 'app_home', methods: ['GET', 'POST'])]
    public function index(Request $request, ArticleService $articleService, CategoryRepository $categoryrepo, ChartBuilderInterface $chartBuilder): Response
    {
        return $this->render('baseHome.html.twig', [
            'articles' => $articleService->getPaginatorArticles(),
            'categories' => $categoryrepo->findAll(),
        ]);
    }

    #[Route('/articles_home', name: 'app_home_articles')]
    public function index_home(ArticleRepository $articlerepo, CategoryRepository $categoryrepo, ThemeRepository $themerepo): Response
    {
        return $this->render('baseArticles.html.twig', [
            'articles' => $articlerepo->findAll(),
            'categories' => $categoryrepo->findAll(),
            'themes' => $themerepo->findAll(),
        ]);
    }
}