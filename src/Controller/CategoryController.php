<?php

namespace App\Controller;

use App\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{
    #[Route('/category/{slug}', name: 'category_show')]
    public function show(?Category $category): Response
    {
        if (!$category) {
            return $this->redirectToRoute('app_home');
        }

        if (!$category){
            return $this->redirectToRoute('app_home');
        }
        return $this->render('category/index.html.twig', [
            'category' => $category,
            'category' => $category
        ]);
    }
}
