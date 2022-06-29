const express = require("express")
const bodyParser = require('body-parser')

// configuração
const userRoutes = require("./routes/user.routes")
const PORT = 5000
const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))

// rota
userRoutes(app)
app.get("/", (req, res) => {
    res.send("Projeto coletor")
})

// start servidor
app.listen(PORT, ()=> {
    console.log(`Server OK ${PORT}`)
})