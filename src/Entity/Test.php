<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\TestRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TestRepository::class)]
#[ApiResource]
class Test
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $rout = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRout(): ?string
    {
        return $this->rout;
    }

    public function setRout(string $rout): static
    {
        $this->rout = $rout;

        return $this;
    }
}
