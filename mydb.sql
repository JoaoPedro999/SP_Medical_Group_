-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 13/12/2023 às 13:51
-- Versão do servidor: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- Versão do PHP: 8.1.2-1ubuntu2.14

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
-- Estrutura para tabela `consultas`
--

CREATE TABLE `consultas` (
  `nome` varchar(255) NOT NULL,
  `data` varchar(255) NOT NULL,
  `hora` varchar(255) NOT NULL,
  `doutor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `consultas`
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
('Paciente01', '2023-12-12', '19:47', 'Walter White'),
('Davi', '2023-12-22', '15:00', 'Fernanda Oliveira'),
('Nicolas', '2023-12-25', '18:00', 'Walter White'),
('Davi', '2023-12-22', '19:00', 'Wilian Afton'),
('Paciente02', '2023-12-14', '15:30', 'Walter White'),
('Caua', '2023-12-24', '12:00', 'Walter White');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pacientes`
--

CREATE TABLE `pacientes` (
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `pacientes`
--

INSERT INTO `pacientes` (`name`, `password`, `cpf`, `type`) VALUES
('admin', 'admin', 'admin', 'Administrador'),
('Paciente01', '123', '123', 'Leitor'),
('Walter White', '123', '123', 'Doutor'),
('Davi', '123', '123', 'Leitor'),
('Nicolas', '321', '321', 'Leitor'),
('Paciente02', '123', '123.231.231-23', 'Leitor'),
('Caua', '321', '321', 'Leitor'),
('Fernanda Oliveira', '123', '123', 'Doutor'),
('Amanda Teixeira', '123', '123', 'Doutor'),
('William Afton', '123', '123', 'Doutor');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
