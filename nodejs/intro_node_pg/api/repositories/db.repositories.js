async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/TESTE");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectCustomers() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM coletor ORDER BY ID;');
    return rows;
}

async function selectCustomersId(id) {
    const conn = await connect();
    const query = 'SELECT * FROM coletor WHERE id=?;'
    const [rows] = await conn.query(query, id);
    return rows;
}

// async function deleteTable(){
//     const conn = await connect()
//     const [rows] = await conn.query(`DROP TABLE evento CASCADE`)
//     return rows
// }

// async function createtable(){
//     const query = `CREATE TABLE evento( tabela recriada
//         id serial PRIMARY KEY,
//         nome VARCHAR (50) UNIQUE NOT NULL
//        )`
//     const conn = await connect()
//     await conn.query(query)
// }

async function insert(coleta) {
    const conn = await connect()
    const query = `INSERT INTO coletor (id, descricao, status_imob, localiza) VALUES (?)`
    const values = [coleta.id, coleta.descricao, coleta.status_imob, coleta.localiza]
    await conn.query(query, [values])
}


async function updateCustomer(coleta,id) {
    const conn = await connect();
    const sql = 'UPDATE coletor SET status_imob=?, localiza=? WHERE id=?';
    const values = [coleta.status_imob, coleta.localiza, id];
    await conn.query(sql, values);
}

async function deleteCustomers(id) {
    const conn = await connect()
    const sql = 'DELETE FROM evento WHERE ID=?'
    await conn.query(sql, id)
}

module.exports = { selectCustomers, selectCustomersId, insert, updateCustomer, deleteCustomers }