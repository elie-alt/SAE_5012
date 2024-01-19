<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use App\Entity\User;

class AppFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        $user = new User();
        $user->setUsername($faker->userName());
        $user->setRoles(['ROLE_ADMIN']);
        $password=$this->hasher->hashPassword($user, '123456A');
        $user->setPassword($password);
        $manager->persist($user);
        $manager->flush();

        $faker = Factory::create('fr_FR');
        $user = new User();
        $user->setUsername($faker->userName());
        $user->setRoles(['ROLE_FOURNISSEUR']);
        $password=$this->hasher->hashPassword($user, '123456F');
        $user->setPassword($password);
        $manager->persist($user);
        $manager->flush();

        $faker = Factory::create('fr_FR');
        $user = new User();
        $user->setUsername($faker->userName());
        $user->setRoles(['ROLE_DESIGNEUR']);
        $password=$this->hasher->hashPassword($user, '123456D');
        $user->setPassword($password);
        $manager->persist($user);
        $manager->flush();

        $faker = Factory::create('fr_FR');
        $user = new User();
        $user->setUsername($faker->userName());
        $user->setRoles(['ROLE_EDITOR']);
        $password=$this->hasher->hashPassword($user, '123456E');
        $user->setPassword($password);
        $manager->persist($user);
        $manager->flush();

        $faker = Factory::create('fr_FR');
        $user = new User();
        $user->setUsername($faker->userName());
        $user->setRoles(['ROLE_AUTHOR']);
        $password=$this->hasher->hashPassword($user, '123456AU');
        $user->setPassword($password);
        $manager->persist($user);
        $manager->flush();

        $faker = Factory::create('fr_FR');
        $user = new User();
        $user->setUsername($faker->userName());
        $user->setRoles(['ROLE_SUBSCRIBER']);
        $password=$this->hasher->hashPassword($user, '123456S');
        $user->setPassword($password);
        $manager->persist($user);
        $manager->flush();

        $faker = Factory::create('fr_FR');
        $user = new User();
        $user->setUsername($faker->userName());
        $user->setRoles(['ROLE_USER']);
        $password=$this->hasher->hashPassword($user, '123456U');
        $user->setPassword($password);
        $manager->persist($user);
        $manager->flush();
    }
}
