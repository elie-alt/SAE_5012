<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use App\Repository\CommentRepository;
use App\Service\ArticleService;
use App\Form\ChartFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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

        $form = $this->createForm(ChartFormType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var UploadedFile $csvFile */
            $csvFile = $form->get('csvFile')->getData();

            if ($csvFile) {
                $csvContent = file_get_contents($csvFile->getPathname());
                $lines = explode("\n", $csvContent);
                $data = [];

        foreach ($lines as $line) {
            $fields = explode(';', $line);
            $data[] = [
                'field1' => $fields[0],
                'field2' => $fields[1],
                'field3' => $fields[2],
                'field4' => $fields[3],
                'label'  => $fields[4],
            ];
        }

        $selectedField = $form->get('selectedField')->getData();

        $filteredData = array_filter($data, function ($row) use ($selectedField) {
            return $row['label'] === $selectedField;
        });

        // dd($selectedField);

        $chartData = [
            'labels'   => array_column($data, 'label'),
            'datasets' => [
                [
                    'label'           => 'Field 1',
                    'data'            => array_column($filteredData, $selectedField),
                    'borderColor'     => 'rgb(75, 192, 192)',
                    'backgroundColor' => 'rgba(75, 192, 192, 0.2)',
                    'fill'            => false,
                ],
            ],
        ];

        $chart = $chartBuilder->createChart(Chart::TYPE_LINE);
                $chart->setData($chartData);
            }
        }

        return $this->render('baseHome.html.twig', [
            'form' => $form->createView(),
            'chart' => isset($chart) ? $chart : null,
            'articles' => $articleService->getPaginatorArticles(),
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