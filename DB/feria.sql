-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-11-2023 a las 22:26:23
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `feria`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `Auth` (IN `_users_address` VARCHAR(256), IN `_users_password` VARCHAR(45))   BEGIN
SELECT idrol,users_address,users_name FROM feria.users  WHERE users_address = _users_address AND users_password = _users_password;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `create_briefcase` (IN `_briefcase_name` VARCHAR(45), IN `_briefcase_photo` VARCHAR(100), IN `_briefcasecol_description` VARCHAR(100))   BEGIN
INSERT INTO briefcase (
briefcase_name,
briefcase_photo,
briefcasecol_description
) VALUES(
_briefcase_name,
_briefcase_photo,
_briefcasecol_description
);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `create_categories` (IN `_idbriefcase` INT(11), IN `_categories_name` VARCHAR(45), IN `_categories_photo` VARCHAR(100))   BEGIN
INSERT INTO  categories (idbriefcase,categories_name,categories_photo) VALUES(_idbriefcase,_categories_name,_categories_photo);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `create_products` (IN `_idcategories` INT(11), IN `_Products_price` BIGINT(11), IN `_Products_reference` VARCHAR(34), IN `_Products_size` VARCHAR(45), IN `_Products_color` VARCHAR(45), IN `_products_photo` VARCHAR(100))   BEGIN
INSERT INTO products (idcategories,Products_price,Products_reference,Products_size,Products_color,products_photo) VALUES(_idcategories,_Products_price,_Products_reference,_Products_size,_Products_color,_products_photo); 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `update_briefcase` (IN `_idbriefcase` INT(10), IN `_briefcase_name` VARCHAR(45), IN `_briefcase_photo` VARCHAR(100), IN `_briefcasecol_description` VARCHAR(100))   BEGIN
 UPDATE briefcase SET briefcase_name = _briefcase_name,
 briefcase_photo = _briefcase_photo,
 briefcasecol_description = _briefcasecol_description
 WHERE  idbriefcase = _idbriefcase;
 
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `update_categories` (IN `_idbriefcase` INT(11), IN `_categories_name` VARCHAR(45), IN `_categories_photo` VARCHAR(100), IN `_idcategories` INT(11))   BEGIN
UPDATE categories SET categories_name = _categories_name,
idbriefcase = _idbriefcase,
categories_photo = _categories_photo
WHERE  idcategories = _idcategories;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `update_product` (IN `_idcategories` INT(11), IN `_Products_price` BIGINT(11), IN `_Products_reference` VARCHAR(34), IN `_Products_size` VARCHAR(45), IN `_Products_color` VARCHAR(45), IN `_products_photo` VARCHAR(100), IN `_idProducts` INT(11))   BEGIN
UPDATE products SET idcategories = _idcategories,
Products_price = _Products_price ,
Products_reference = _Products_reference,
Products_size = _Products_size,
Products_color = _Products_color,
products_photo = _products_photo
WHERE idProducts = _idProducts
;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `briefcase`
--

CREATE TABLE `briefcase` (
  `idbriefcase` int(10) UNSIGNED NOT NULL,
  `briefcase_name` varchar(45) NOT NULL,
  `briefcase_photo` varchar(100) NOT NULL,
  `briefcasecol_description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `briefcase`
--

INSERT INTO `briefcase` (`idbriefcase`, `briefcase_name`, `briefcase_photo`, `briefcasecol_description`) VALUES
(1, 'Pijama', '1700856457805pijama.avif', 'Ropa comoda para dormir'),
(2, 'Brasieres', '1700777295368brasiel.webp', 'Todo para tu gusto'),
(3, 'Deportivos', '1700856632969deportivos.webp', 'Ropara para deporte');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `idcategories` int(11) NOT NULL,
  `idbriefcase` int(11) NOT NULL,
  `categories_name` varchar(45) NOT NULL,
  `categories_photo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`idcategories`, `idbriefcase`, `categories_name`, `categories_photo`) VALUES
(1, 1, 'Batolas', '1700860140852batola.webp'),
(2, 1, 'Pantalon', '1700859432881pantalon.webp'),
(3, 1, 'Shorts', '1700859979501shorts.webp'),
(4, 2, 'Strapless', '1700868749813strapless.webp'),
(5, 2, 'Bralette', '1700868859074bralete.webp'),
(6, 2, 'Realce', '1700868913159realce.webp'),
(7, 3, 'Pantalones', '1700871170539pantalones.webp'),
(8, 3, 'Top', '1700871267086top.webp'),
(9, 3, 'Camiseta', '1700871356828camisajpg.jpg');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `get_briefcase`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `get_briefcase` (
`idbriefcase` int(10) unsigned
,`briefcase_name` varchar(45)
,`briefcase_photo` varchar(100)
,`briefcasecol_description` varchar(100)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `get_categories`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `get_categories` (
`idcategories` int(11)
,`idbriefcase` int(11)
,`categories_name` varchar(45)
,`categories_photo` varchar(100)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `get_products`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `get_products` (
`idProducts` int(11)
,`idcategories` int(11)
,`Products_price` bigint(11)
,`Products_reference` varchar(34)
,`Products_size` varchar(45)
,`Products_color` varchar(45)
,`products_photo` varchar(100)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `idProducts` int(11) NOT NULL,
  `idcategories` int(11) NOT NULL,
  `Products_price` bigint(11) NOT NULL,
  `Products_reference` varchar(34) NOT NULL,
  `Products_size` varchar(45) NOT NULL,
  `Products_color` varchar(45) NOT NULL,
  `products_photo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`idProducts`, `idcategories`, `Products_price`, `Products_reference`, `Products_size`, `Products_color`, `products_photo`) VALUES
(1, 1, 28300, ' Batola Amplia', 'M', '#DB56ED', '1700860910442bmangasisa.webp'),
(2, 1, 41930, 'Batola Estampada', 'L', '#ECE6E5', '1700863649415bestampada.webp'),
(3, 1, 42930, 'Batola sisa', 'M', '#F1CDC8', '1700864024024batola.webp'),
(5, 2, 42930, 'Pantalón St Even', 'M', '#8AD583', '1700864427557pantalonst.webp'),
(6, 2, 55390, 'Pantalón St Even', 'M', '#9BA29A', '1700864579936pantalonsts.webp'),
(7, 2, 60390, 'Pantalón Largo Y Blusa', 'L,M', '#9BA29A', '1700864665628pantalon.webp'),
(8, 3, 60390, 'Pijama Efecto Satín', 'L,M,S', '#9DB7C8', '1700865051314shorts.webp'),
(9, 3, 80390, 'Pijama Camiseta Y Pantalón', 'L,M,S', '#8FDFD0', '1700865564092pijamaverde.webp'),
(10, 3, 70390, 'Pijama Corta', 'L,M,S', '#DAB4F0', '1700865678509pijama_c.webp'),
(11, 4, 20390, 'Estampado medio', '34,35,36', '#F0B4ED', '1700869534083straple1.jpg'),
(12, 4, 25390, 'Multiusos', '34,35,36', '#DD90D9', '1700869629090straple2.webp'),
(13, 4, 25390, 'Realce medio', '34,35,36', '#C95E48', '1700869869582straple3.jpg'),
(15, 5, 25390, 'Suave encaje', '34,35,36', '#C95E48', '1700870049428braleterojo.webp'),
(16, 5, 27390, 'Con broche delantero', '34,35,36', '#000000', '1700870218039bralete_negro.webp'),
(17, 5, 30390, 'Encaje mujer', '34,35,36', '#EBCDC7', '1700870355595bralete_piel.webp'),
(18, 6, 20390, 'De encaje', '34,35,36', '#1C398A', '1700870666236realce1.webp'),
(19, 6, 25390, 'Con realce medio', '34,35,36', '#000000', '1700870825050realce2.jpg'),
(20, 6, 35390, 'Doble realce St Even', '34,35,36', '#E7DEDC', '1700870931505realce3.webp'),
(21, 7, 45390, ' Deportivo St Even', 'L,S,M', '#000000', '1700871693284deportivos.webp'),
(22, 7, 65390, ' Deportivo texturizado', 'L,S,M', '#000000', '1700871751740PANTALO1.webp'),
(23, 7, 65390, 'Subadera St Even', 'L,S,M', '#818080', '1700871821281pantalon3.webp'),
(24, 8, 35390, 'De buen cubrimiento', '34,33,32', '#FFFFFF', '1700871940639top1.webp'),
(25, 8, 45390, 'Cargaderas Anchas', '34,33,32', '#000000', '1700872100335TOP2.webp'),
(26, 8, 44390, '24 Horas Mujer Latina', '34,33,32', '#000000', '1700872168518TOP3.webp'),
(27, 9, 22000, 'Con malla', 'L,M,S', '#000000', '1700872299062camisa1.webp'),
(28, 9, 25300, 'Silueta  a Justada', 'L,M,S', '#FFFFFF', '1700872385380CAMISA3.webp'),
(29, 9, 35300, 'emiajustada St Even', 'L,M,S', '#818080', '1700872481197camisa4.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `idrol` int(11) NOT NULL,
  `rol_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idrol`, `rol_name`) VALUES
(1, 'customer'),
(2, 'Admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idusers` int(11) NOT NULL,
  `idrol` int(11) NOT NULL,
  `users_name` varchar(45) NOT NULL,
  `users_address` varchar(45) NOT NULL,
  `users_password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idusers`, `idrol`, `users_name`, `users_address`, `users_password`) VALUES
(1, 2, 'santiago ospina', 'santiagoospina@hotmail.com', '123'),
(2, 1, 'erica', 'ericatgu@gmail.com', '123');

-- --------------------------------------------------------

--
-- Estructura para la vista de `get_briefcase` exportada como una tabla
--
DROP TABLE IF EXISTS `get_briefcase`;
CREATE TABLE`get_briefcase`(
    `idbriefcase` int(10) unsigned NOT NULL DEFAULT '0',
    `briefcase_name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
    `briefcase_photo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
    `briefcasecol_description` varchar(100) COLLATE utf8_spanish_ci NOT NULL
);

-- --------------------------------------------------------

--
-- Estructura para la vista de `get_categories` exportada como una tabla
--
DROP TABLE IF EXISTS `get_categories`;
CREATE TABLE`get_categories`(
    `idcategories` int(11) NOT NULL DEFAULT '0',
    `idbriefcase` int(11) NOT NULL,
    `categories_name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
    `categories_photo` varchar(100) COLLATE utf8_spanish_ci NOT NULL
);

-- --------------------------------------------------------

--
-- Estructura para la vista de `get_products` exportada como una tabla
--
DROP TABLE IF EXISTS `get_products`;
CREATE TABLE`get_products`(
    `idProducts` int(11) NOT NULL DEFAULT '0',
    `idcategories` int(11) NOT NULL,
    `Products_price` bigint(11) NOT NULL,
    `Products_reference` varchar(34) COLLATE utf8_spanish_ci NOT NULL,
    `Products_size` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
    `Products_color` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
    `products_photo` varchar(100) COLLATE utf8_spanish_ci NOT NULL
);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `briefcase`
--
ALTER TABLE `briefcase`
  ADD PRIMARY KEY (`idbriefcase`),
  ADD UNIQUE KEY `idbriefcase_UNIQUE` (`idbriefcase`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idcategories`),
  ADD UNIQUE KEY `idcategories_UNIQUE` (`idcategories`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idProducts`),
  ADD UNIQUE KEY `idProducts_UNIQUE` (`idProducts`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idrol`,`rol_name`),
  ADD UNIQUE KEY `idrol_UNIQUE` (`idrol`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idusers`),
  ADD UNIQUE KEY `idusers_UNIQUE` (`idusers`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `briefcase`
--
ALTER TABLE `briefcase`
  MODIFY `idbriefcase` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `idcategories` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `idProducts` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `idrol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idusers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


--
-- Metadatos
--
USE `phpmyadmin`;

--
-- Metadatos para la tabla briefcase
--

--
-- Metadatos para la tabla categories
--

--
-- Metadatos para la tabla get_briefcase
--

--
-- Metadatos para la tabla get_categories
--

--
-- Metadatos para la tabla get_products
--

--
-- Metadatos para la tabla products
--

--
-- Metadatos para la tabla rol
--

--
-- Metadatos para la tabla users
--

--
-- Metadatos para la base de datos feria
--
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
