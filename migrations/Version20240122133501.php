<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240122133501 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE article ADD featured_data_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE article ADD CONSTRAINT FK_23A0E669634B171 FOREIGN KEY (featured_data_id) REFERENCES datas (id)');
        $this->addSql('CREATE INDEX IDX_23A0E669634B171 ON article (featured_data_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE article DROP FOREIGN KEY FK_23A0E669634B171');
        $this->addSql('DROP INDEX IDX_23A0E669634B171 ON article');
        $this->addSql('ALTER TABLE article DROP featured_data_id');
    }
}
