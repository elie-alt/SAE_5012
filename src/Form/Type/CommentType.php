<?php

namespace App\Form\Type;

use App\Entity\Article;
use App\Entity\Comment;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CommentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('content', TextareaType::class, [
            'label' => 'Votre message',
            'attr' => [
                'class' => 'comment-textarea-class',
            ],
        ])
        ->add('article', HiddenType::class, [
            'attr' => [
                'class' => 'comment-input-class',
            ],
        ])
        ->add('send', SubmitType::class, [
            'label' => 'Envoyer',
            'attr' => [
                'class' => 'btn offset-10 mb-4 mt-3',
            ],
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Comment::class,
            'csrf_token_id' => 'comment-add'
        ]);
    }
}