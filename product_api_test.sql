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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `is_google_account` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20250205030929', '2025-03-04 06:52:32', 19);
INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20250225033742', '2025-03-04 06:52:32', 9);
INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20250303104252', '2025-03-04 06:52:32', 9);

INSERT INTO `product` (`id`, `name`, `price`, `description`) VALUES
(7, 'Test Product1', 100, 'Test Description');
INSERT INTO `product` (`id`, `name`, `price`, `description`) VALUES
(8, 'Test Product', 100, 'Test Description');
INSERT INTO `product` (`id`, `name`, `price`, `description`) VALUES
(9, 'Test Product67c6bb33d408d', 100, 'Test Description');
INSERT INTO `product` (`id`, `name`, `price`, `description`) VALUES
(10, 'Test Product67c6bb36984bc', 100, 'Test Description'),
(11, 'Test Product67c6bb4258cdb', 100, 'Test Description'),
(12, 'Test Product67c6bb44b4a72', 100, 'Test Description'),
(13, 'Test Product67c6bb6a13bcb', 100, 'Test Description'),
(14, 'Test Product67c6bbd75b595', 100, 'Test Description'),
(15, 'Test Product67c6be58a3220', 100, 'Test Description'),
(16, 'Test Product67c6be6192f10', 100, 'Test Description');

INSERT INTO `user` (`id`, `username`, `password`, `email`, `role`, `is_google_account`) VALUES
(5, 'testuser', 'password123', 'test@example.com', 'user', 0);
INSERT INTO `user` (`id`, `username`, `password`, `email`, `role`, `is_google_account`) VALUES
(6, 'Testuser67c6bd2268792', 'password123', 'test67c6bd2268796@example.com', 'user', 0);
INSERT INTO `user` (`id`, `username`, `password`, `email`, `role`, `is_google_account`) VALUES
(7, 'Testuser67c6bd4d66fcc', 'password123', 'test67c6bd4d66fcf@example.com', 'user', 0);
INSERT INTO `user` (`id`, `username`, `password`, `email`, `role`, `is_google_account`) VALUES
(8, 'Testuser67c6bd5f687b4', 'password123', 'test67c6bd5f687b6@example.com', 'user', 0),
(9, 'Testuser67c6be39b4f39', 'password123', 'test67c6be39b4f3b@example.com', 'user', 0);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;