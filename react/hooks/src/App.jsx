import { useContext } from "react"
import Twitter from "./components/CicloVida/Twitter"
import Counter from "./components/Counter/Counter"
import CounterHook from "./components/Counter/CounterHook"
import IfoodCounter from "./components/IfoodCounter/IfoodCounter"
import Card from "./components/Card/Card"
import { ThemeContex, themes } from "./theme"
function App() {

  const posts = {
    title: "ciclo de vida",
    description: "ComponentDidMount depreciado (useEffect)"
  }
  return (

    <>
      <ThemeContex.Provider value={themes.primary}>
        <Card/>
      </ThemeContex.Provider>
      {/* <Counter />
    <CounterHook/>
    <IfoodCounter/> 
    <Twitter posts={posts}/>
    */
      }
    </>

  )
}
export default App
