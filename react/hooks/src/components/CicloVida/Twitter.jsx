import { useEffect, useState } from "react"



export default function Twitter() {

    const [tweet, setTweet] = useState('title')

    useEffect(() => {
        console.log(`Componente montado`)
    },[])

    useEffect(() => {
        console.log(`Componente atualizado`)
    },[tweet])

    useEffect(() => {
        return () => {
            console.log(`Componente removido`)
        }
    },[])

    let onClick = () => {
        setTweet('tweet atualizado')
    }
    console.log(`Atualizado: ${tweet}`)
  return (
      
    <div>Twitter
        <button onClick={onClick}>re-render</button>
    </div>
  )
}
