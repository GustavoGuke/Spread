
(async () => {
    const db = require("./db");
    console.log('Começou!');
 
    console.log('create TABLE coletor');
    const clientes = await db.createtable();
    console.log();
})();