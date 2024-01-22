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

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Name = null;

    #[Vich\UploadableField(mapping: 'products', fileNameProperty: 'imageName', size: 'imageSize')]
    private ?File $datasFile = null;

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
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $datasFile
     */
    public function setDatasFile(?File $datasFile = null): void
    {
        $this->datasFile = $datasFile;

        // if (null !== $datasFile) {
        //     // It is required that at least one field changes if you are using doctrine
        //     // otherwise the event listeners won't be called and the file is lost
        //     $this->updatedAt = new \DateTimeImmutable();
        // }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
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
}
