const Sequelize = require("sequelize")
const sequelize = require("./db")

// Criação do Banco de Dados
const Produto = sequelize.define('produto',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING
})

module.exports = Produto