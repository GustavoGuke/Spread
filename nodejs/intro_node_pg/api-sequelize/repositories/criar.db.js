(async () => {
    const database = require("./db")
    const Produto = require("./01-db")
    await database.sync()

    //inserir c
    // const novoProduto = await Produto.create({
    //     nome:"mouse",
    //     preco:50.29,
    //     descricao: "Material de escritório"
    // })

    // mostrar/show r
    //const produtos = await Produto.findAll()
    // const produtos = await Produto.findByPk(2)

    // update u
    // produtos.descricao = "Update no mouse"
    // await produtos.save()

    // delete d
    await Produto.destroy({where: {
        id:1
    }})
})()