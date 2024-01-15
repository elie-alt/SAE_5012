<?php

namespace App\Service;

use App\Entity\Category;
use App\Repository\ArticleRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class ArticleService
{
    public function __construct(
        private RequestStack $requestStack,
        private ArticleRepository $ArticleRepo,
        private PaginatorInterface $paginator
     )
    {

    }

    public function getPaginatorArticles(?Category $category = null)
    {
        $request = $this->requestStack->getMainRequest();
        $page = $request->query->getInt('page', 1);
        $limit = 2;
        $ArticlesQuery = $this->ArticleRepo->findForPagination($category);
        return $this->paginator->paginate($ArticlesQuery, $page, $limit);
    }
}