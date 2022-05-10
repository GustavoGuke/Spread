import styled from 'styled-components'
import { GlobalStyle } from '../GlobalStyle';
import { Quotes } from '../components/Quotes/Quotes';
import { useEffect, useRef, useState } from 'react';

import getQuote from '../service/quoteService.js'
import narutoImg from '../images/naruto.png'
import jutsuAudio from '../sounds/jutso.mp3'

const audio = new Audio(jutsuAudio)

export function App() {
  const isMounted = useRef(true)
  const [quoteState, setQuoteState] = useState({ quote: 'ok', speaker: 'speaker' })

  const onUpdate = async () => {
    const quote = await getQuote()
    if (isMounted) {
      setQuoteState(quote)
      audio.play()
    }
  }

  useEffect(() => {
    onUpdate()
    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <Content>
        <Quotes {...quoteState} onClick={onUpdate} />
        <NarutoImg src={narutoImg} alt='Naruto Uzumaki' />
      </Content>
    </>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`