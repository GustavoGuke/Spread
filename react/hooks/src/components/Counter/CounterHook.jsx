import { useState } from "react"
export default function CounterHook() {
    const [value, setValue] = useState(0)
    let [count, setCounter] = useState(0)
    let timer = null
    function handleValue(e) {
        setValue(e.target.value)
    }
    function handleClick(e) {
        e.preventDefault()
        timer = setInterval(() => {
            if (count < value) {
                setCounter(count = count + 1)
            } else {
                if (count == value) alert('fim do tempo')
                setCounter(0)
                setValue(-1)
                clearInterval(timer)
            }
        }, 1000)
        timer
    }
    return (
        <div>CounterHook
            <input onChange={handleValue} type="number" />
            <button onClick={handleClick}>start</button>
            <div>{count}</div>
        </div>
    )
}
