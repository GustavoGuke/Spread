-- CRIAR DATA BASE
CREATE DATABASE dio_mysql;

-- EXCLUIR 
DROP DATABASE dio_mysql;

-- USE SETA O BANCO DE DADOS A SER USADO
USE dio_mysql;

-- CRIAÇÃO DA TABELA
CREATE TABLE pessoas (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(20),
    age DATE,
    teste
);

-- MOSTRAR ESTRUTURA 
DESCRIBE pessoas;

-- ALTERAR ESTRUTURA
ALTER TABLE pessoas ADD address VARCHAR(50);
ALTER TABLE pessoas ADD sexo CHAR(1);

-- INSERIR DADOS NA TABELA
INSERT INTO pessoas (name,age,address) value ('Gustavo','1994-09-10','SP-Aruja');
INSERT INTO pessoas (name,age,address) value ('Kerolin','1994-10-06','SP-Aruja');
INSERT INTO pessoas (name,age,address) value ('Gustavo','1994-09-10','SP-Aruja');

-- UPDATE DE DADOS 
UPDATE pessoas SET name = 'kessilin',age = '' WHERE id = 3;
UPDATE pessoas SET sexo = 'M' where id = 5;

-- DELETAR DADOS
DELETE FROM pessoas WHERE id=4;

-- MOSTRAR DADOS DA TABELA
SELECT * FROM pessoas;

-- ORDENAR TABELA - PARA TRAZER DE FORMA DECRESNTE ADD O DESC NO FINAL
SELECT * FROM pessoas ORDER BY name DESC;

-- AGRUPAR DADOS
SELECT COUNT(id), sexo FROM pessoas GROUP BY sexo;