const {Router} = require("express")

const {selectCustomers,selectCustomersId, insert, updateCustomer, deleteCustomers} = require("../repositories/db.repositories")


const apiRouter = Router()

apiRouter.get("/", async (req, res) => {
    const data = await selectCustomers()
    res.send(data)
})

apiRouter.get("/:id", async (req, res) => {
    const id = req.params.id
    const data = await selectCustomersId(id)
    res.send(data)
})

apiRouter.post("/" , async (req, res) => {
    const data = await insert(req.body)
    res.send(data)
})

apiRouter.put("/:id", async (req, res) => {
    const id = req.params.id
    const data = await updateCustomer(req.body, id)
    res.send(data)
})

apiRouter.delete("/:id", async (req, res) => {
    const id = req.params.id
    const data = await deleteCustomers(id)
    res.send(data)
})

module.exports = {apiRouter}