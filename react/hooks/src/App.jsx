import Twitter from "./components/CicloVida/Twitter"
import Counter from "./components/Counter/Counter"
import CounterHook from "./components/Counter/CounterHook"
import IfoodCounter from "./components/IfoodCounter/IfoodCounter"
function App() {

  const posts = {
    title: "ciclo de vida",
    description: "ComponentDidMount depreciado (useEffect)"
  }
  return (
    <div >
      {/* <Counter />
      <CounterHook/>
      <IfoodCounter/> */}
      <Twitter posts={posts}/>
    </div>
  )
}
export default App
