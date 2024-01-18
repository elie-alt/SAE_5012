<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\ErrorHandler\Exception\FlattenException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class ErrorController extends AbstractController
{
    #[Route('/error', name: 'error')]
    public function show(FlattenException $exception, Environment $env): Response
    {
        $view = "bundles/TwigBundle/Exception/error{$exception->getStatusCode()}.html.twig";

        if (!$env->getLoader()->exists($view)){
            $view = "bundles/TwigBundle/Exception/error.html.twig";
        }

        return $this->render($view);
    }
}