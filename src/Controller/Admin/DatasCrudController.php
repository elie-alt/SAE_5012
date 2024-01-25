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
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\VichImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;

class DatasCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Datas::class;
    }

    public function configureFields(string $pageName): iterable
    {
        
        yield TextField::new('name');
        yield CollectionField::new('filename')
            ->setEntryType(DatasType::class);
    }
    
}
