const Sequelize = require("sequelize");

const sequelize = new Sequelize("TESTE", "root", "", {
    dialect: "mysql",
    host: "localhost",
    port: 3306
});
console.log("Conectou no MySQL!");
module.exports = sequelize