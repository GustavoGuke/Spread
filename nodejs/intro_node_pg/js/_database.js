const { Client } = require('pg')

const connectionString = `postgres://hlyyonpv:Tje_34ji3lyuAdMrwQX2XV6BoWqjcEAW@motty.db.elephantsql.com/hlyyonpv`
const client = new Client({
  connectionString,
})

client.query('SELECT now()',(err, res) => {
  console.log(res.rows)
  client.end()
})
