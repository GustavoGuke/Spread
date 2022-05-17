import { useContext } from "react"
import { ThemeContex } from "../../theme"
export default function Card() {
    const themes = useContext(ThemeContex)
    
    console.log(themes)
  return (
    <div>Card
        <button style={{background:themes.background, color: themes.color}}>Card-Button</button>
    </div>
  )
}
