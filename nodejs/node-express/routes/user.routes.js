const fs = require("fs")
const { join } = require('path')
const filePath = join(__dirname, 'user.json')

const getUsers = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

const userRoutes = (app) => {
    app.route('/users/:id?')
        .get((req, res) => {
            const user = getUsers()
            res.send({ user })
        })
        .post((req, res) => {
            const user = getUsers()
            console.log(req.body)
            user.push(req.body)
            saveUser(user)
            res.status(201).send("User Adicionado")
        })
        .put((req, res) => {
            const user = getUsers()
            const update = user.find((oldUser) => oldUser.id == req.params.id)
            update.name = req.body.name
            saveUser(user.map(user => {
                return user
            }))
            res.status(200).send("modificado")
        })
        .delete((req, res) => {
            const user = getUsers()
            saveUser(user.filter((delUser) => delUser.id != req.params.id))
            res.status(200).send('item deletado')
        })
}
module.exports = userRoutes