export default function Counter() {
    let contador = 0
    let timer = null
    let value = null
    function handleClick(e) {
        e.preventDefault()
        timer = setInterval(() => {
            if (contador < value) {
                contador++
                document.getElementById('contador').innerHTML = contador
            } else {
                if (contador == value) alert('fim do tempo')
                contador = 0
                value = -1
                document.getElementById('contador').innerHTML = contador
                clearInterval(timer)
            }
        }, 1000)
        timer
    }
    function handleChange(e) {
        value = e.target.value
    }
    return (
        <div>Counter
            <input id="input" type="number" onChange={handleChange} />
            <button onClick={handleClick}>start</button>
            <div id="contador">{contador}</div>
        </div>
    )
}
