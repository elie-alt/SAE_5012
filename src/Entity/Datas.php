<?php

namespace App\Entity;

use App\Repository\DatasRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: DatasRepository::class)]
#[Vich\Uploadable]
class Datas
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Vich\UploadableField(mapping: 'filename', fileNameProperty: 'Filename')]
    private ?File $datasFile = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Name = null;

    #[ORM\Column(length: 255)]
    private ?string $Filename = null;

    #[ORM\OneToMany(mappedBy: 'FeaturedData', targetEntity: Article::class)]
    private Collection $articles;

    public function __construct()
    {
        $this->articles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setFile(?File $file): self
    {
        $this->file = $file;

        if (null != $file){
            $this->updatedAt = new \DateTimeImmutable();
        }

        return $this;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(?string $Name): static
    {
        $this->Name = $Name;

        return $this;
    }

    public function getFilename(): ?string
    {
        return $this->Filename;
    }

    public function setFilename(string $Filename): static
    {
        $this->Filename = $Filename;

        return $this;
    }

    /**
     * @return Collection<int, Article>
     */
    public function getArticles(): Collection
    {
        return $this->articles;
    }

    public function addArticle(Article $article): static
    {
        if (!$this->articles->contains($article)) {
            $this->articles->add($article);
            $article->setFeaturedData($this);
        }

        return $this;
    }

    public function removeArticle(Article $article): static
    {
        if ($this->articles->removeElement($article)) {
            // set the owning side to null (unless already changed)
            if ($article->getFeaturedData() === $this) {
                $article->setFeaturedData(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->filename;
    }
}
