import { useState, useEffect } from "react"
import './index.css'

export default function IfoodCounter() {
  const [value, setValue] = useState(0)
  const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")

  useEffect(() => {
    console.log('value mudo')
  },[value])
  function handleDown(){
    if( value <=1){
      setButtonStyle("counter-button-minus-desactive")
    }
    if(value > 0){
      setValue(value-1)
    }
  }
  function handleUp(){
    setValue(value+1)
    setButtonStyle("counter-button-minus-active")
  }
  return (
    <div className="counter-wrapper">
     <button className={buttonStyle} onClick={handleDown}>-</button>
      <p> {value} </p>
      <button className="counter-button-plus-active" onClick={handleUp}>+</button>
    </div>
  )
}
