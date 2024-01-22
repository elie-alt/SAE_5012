<?php

namespace App\Controller\Admin;

use App\Entity\Datas;
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

class DatasCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Datas::class;
    }

    
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('CSV File')
            ->setEntityLabelInPlural('CSV Files')
            ->setSearchFields(['name', 'public/Datas']); // Champs utilisés pour la recherche
    }

    public function configureFields(string $pageName): iterable
    {
        $fields = [
            TextField::new('name'),
            UrlField::new('public/Datas')->setLabel('File path'),
        ];

        if ($pageName == Crud::PAGE_NEW) {
            $fields[] = VichImageField::new('Name')->setFormTypeOptions(['required' => true]);
        }

        return $fields;
    }
    
}
