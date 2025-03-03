/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `description` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `is_google_account` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20250205030929', '2025-02-24 11:03:26', 15);
INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20250225033742', '2025-02-25 04:38:09', 19);
INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20250303104252', '2025-03-03 11:43:44', 13);

INSERT INTO `product` (`id`, `name`, `price`, `description`) VALUES
(1, 'Botol Minum', 100000, 'Merk Tupperware');
INSERT INTO `product` (`id`, `name`, `price`, `description`) VALUES
(2, 'Casing Smartphone', 20000, 'Bahan Silicon');
INSERT INTO `product` (`id`, `name`, `price`, `description`) VALUES
(4, 'Jam Tangan', 250000, 'Casio Keren');
INSERT INTO `product` (`id`, `name`, `price`, `description`) VALUES
(5, 'Mouse Gaming ', 2000000, 'Merk Razer');

INSERT INTO `user` (`id`, `username`, `password`, `email`, `role`, `is_google_account`) VALUES
(5, 'jessi', 'jessi123', 'jessi@gmail.com', 'user', 0);
INSERT INTO `user` (`id`, `username`, `password`, `email`, `role`, `is_google_account`) VALUES
(6, 'darren', 'darren123', 'darren@gmail.com', 'user', 0);
INSERT INTO `user` (`id`, `username`, `password`, `email`, `role`, `is_google_account`) VALUES
(7, 'Darren Christian', '', 'darrenchrist2@gmail.com', 'user', 1);
INSERT INTO `user` (`id`, `username`, `password`, `email`, `role`, `is_google_account`) VALUES
(10, 'jessica', 'jessica123', 'jessica@gmail.com', 'user', 0),
(11, 'stacia', 'stacia123', 'stacia@gmail.com', 'user', 0),
(12, 'dionisius', '123', 'dionius@gmail.com', 'user', 0),
(13, 'Darren Christian', '', 'darrensiwibu@gmail.com', 'user', 1);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;