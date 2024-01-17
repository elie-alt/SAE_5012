<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChartFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('csvFile', FileType::class, [
                'label' => 'Importer un fichier',
            ])
            ->add('selectedField', ChoiceType::class, [
                'label'   => 'Choisir un champ',
                'choices' => [
                    'Field 1' => 'Iris-setosa',
                    'Field 2' => 'Iris-versicolor',
                    'Field 3' => 'Iris-virginica',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
}
