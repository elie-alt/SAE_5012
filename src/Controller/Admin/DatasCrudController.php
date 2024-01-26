<?php

namespace App\Controller\Admin;

use App\Entity\Datas;
use App\Form\Type\DatasType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\VichFileField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use Vich\UploaderBundle\Form\Type\VichFileType;

class DatasCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Datas::class;
    }

    public function configureFields(string $pageName): iterable
    {
        yield TextField::new('name');
        yield Field::new('content')
            ->setFormType(DatasType::class);
    }
}
