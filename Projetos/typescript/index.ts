interface Veiculo {
    nome: string,
    placa: string,
    entrada: Date
}

(function(){
    const $ = (query:string): HTMLInputElement | null => document.querySelector(query)

    function patio(){

        function ler(){
            return localStorage.patio ? JSON.parse(localStorage.patio) : []
        }
        function salvar(veiculo: Veiculo[]){
            localStorage.setItem("patio", JSON.stringify(veiculo))
        }
        
        function add(veiculo: Veiculo){
            const row = document.createElement("tr")

            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
                <button class="delete" id=${veiculo.placa}>X</button>
            </td>
            `
            $("#patio")?.appendChild(row)

            salvar([...ler(), veiculo])
        }

        function rem(){}


        function render(){}

        return {ler, add, rem, salvar, render}
    }

    $("#cadastrar")?.addEventListener("click", () => {
        const nome = $("#nome")?.value
        const placa = $("#placa")?.value

        if(!nome || !placa) {
            alert("Os campos são obrigatórios")
            return
        }

        patio().add({nome, placa, entrada: new Date()})
    })
})()