(async () => {
    const db = require("./db");
    console.log('Começou!');
 
    console.log('DROP TABLE evento CASCADE');
    const clientes = await db.deleteTable();
    console.log(clientes);
})();