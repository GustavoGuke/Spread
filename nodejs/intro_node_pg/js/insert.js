(async () => {
    const db = require("./db");
    console.log('Começou!');
    
    console.log('INSERT INTO eventos');
    const res = await db.insert()
    console.log(res)


    console.log('SELECT * FROM eventos');
    const eventos = await db.selectCustomers();
    console.log(eventos);
})();