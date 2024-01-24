<?php

namespace App\Controller;

use App\Entity\Theme;
use App\Form\ThemeType;
use App\Repository\ThemeRepository;
use App\Service\ArticleService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ThemeController extends AbstractController
{
    #[Route('/theme/{slug}', name: 'theme_show')]
    public function show(?Theme $theme, ArticleService $articleService): Response
    {
        if (!$theme) {
            return $this->redirectToRoute('app_home');
        }

        return $this->render('theme/index.html.twig', [
            'theme' => $theme,
        ]);
    }
}
