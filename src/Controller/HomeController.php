<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(ArticleRepository $articlerepo): Response
    {
        return $this->render('base.html.twig', [
            'articles' => $articlerepo->findAll()
        ]);
    }
}