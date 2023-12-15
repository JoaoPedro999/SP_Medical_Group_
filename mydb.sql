-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 12-Dez-2023 às 22:03
-- Versão do servidor: 8.0.21
-- versão do PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `mydb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `consultas`
--

DROP TABLE IF EXISTS `consultas`;
CREATE TABLE IF NOT EXISTS `consultas` (
  `nome` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `data` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `hora` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `doutor` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `consultas`
--

INSERT INTO `consultas` (`nome`, `data`, `hora`, `doutor`) VALUES
('Joao', '20/10/2023', '10:00', 'Dr. Eufrates'),
('João', '2023-11-11', '04:52', 'Walter White'),
('João', '2023-11-11', '04:52', 'Walter White'),
('joao', '2023-11-25', '03:30', 'Walter White'),
('João Pedro', '2023-11-29', '00:00', 'Walter White'),
('Gustavo', '2023-11-30', '08:00', 'Wilian Afton'),
('Rasputin', '2023-12-07', '00:00', 'Wilian Afton'),
('Roberta', '2023-11-29', '12:12', 'Walter White'),
('Paciente', '2023-12-09', '12:00', 'Walter White'),
('davi', '2023-08-15', '15:00', 'Fernanda Oliveira'),
('davi', '2023-08-15', '15:00', 'Wilian Afton'),
('davi', '5665-04-05', '07:59', 'Walter White'),
('a', '2023-12-09', '12:17', 'Fernanda Oliveira'),
('Paciente01', '2023-12-13', '17:16', 'Walter White'),
('Paciente01', '2023-12-12', '17:26', 'Fernanda Oliveira'),
('Paciente01', '2023-12-12', '19:47', 'Walter White');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
CREATE TABLE IF NOT EXISTS `pacientes` (
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cpf` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `pacientes`
--

INSERT INTO `pacientes` (`name`, `password`, `cpf`, `type`) VALUES
('admin', 'admin', 'admin', 'Administrador'),
('Paciente01', '123', '123', 'Leitor'),
('Walter White', '123', '123', 'Doutor');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
