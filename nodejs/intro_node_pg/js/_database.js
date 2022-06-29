const { Client } = require('pg')

const connectionString = ``
const client = new Client({
  connectionString,
})

client.query('SELECT now()',(err, res) => {
  console.log(res.rows)
  client.end()
})
