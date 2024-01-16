<?php

namespace App\Service;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use App\Repository\CommentRepository;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class CommentService
{
    public function __construct(
        private RequestStack $requestStack,
        private CommentRepository $CommentRepo,
        private PaginatorInterface $paginator
     )
    {

    }

    public function getPaginatorComments(?Article $article = null)
    {
        $request = $this->requestStack->getMainRequest();
        $page = $request->query->getInt('page', 1);
        $limit = 2;
        $CommentsQuery = $this->CommentRepo->findForPagination($article);
        return $this->paginator->paginate($CommentsQuery, $page, $limit);
    }
}