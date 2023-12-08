-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 08/12/2023 às 13:48
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
('a', '2023-12-09', '12:17', 'Fernanda Oliveira');

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
('joao', '123', '42588517870', ''),
('João', '123', NULL, ''),
('Joao', '123', NULL, ''),
('Joao', '123', NULL, ''),
('shavinato', 'shavinato10', NULL, ''),
('João ', '23031983', NULL, ''),
('João Pedro', '23031983', '42588517870', ''),
('admin', 'admin', NULL, ''),
('admin', 'admin', NULL, ''),
('Admin', '23031983', '42588517870', 'Administrador'),
('Admin', '23031983', '42588517870', 'Administrador'),
('Joao', '23031983', '42588517870', 'Leitor'),
('Joao', '23031983', '42588517870', 'Leitor'),
('Joao', '123', '42588517870', 'Leitor'),
('João Pedro Teixeira', '2303', '42588517870', 'Leitor'),
('Gustavo', '123', '12345678910', 'Leitor'),
('João', '123', '42588517870', 'Leitor'),
('Davi', '123', '123', 'Leitor'),
('Davi', '123', '123', 'Leitor'),
('Davi', '123', '123', 'Leitor'),
('kamile', '123', '123', 'Leitor'),
('Administrador', 'admin', '000', 'Administrador'),
('Administrador', 'admin', '000', 'Administrador'),
('Guilherme Veiga', '123', '123', 'Leitor'),
('Paciente01', '123', '123', 'Leitor'),
('Veiga', 'veiga', '123', 'Leitor'),
('Davi', '123', '123', 'Leitor'),
('camyle', '170', '170', 'Leitor'),
('Brito', 'vasco123', '222222222222222', 'Leitor'),
('Teste', '123', '2', 'Leitor'),
('Teste', '123', '2', 'Leitor'),
('Teste', '123', '2', 'Leitor'),
('a', 'a', 'a', 'Leitor'),
('a', 'a', 'a', 'Leitor');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
