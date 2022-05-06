import styled from "styled-components"
import {string} from 'prop-types'
import { Button } from "../Button/Button"
export function Quotes({quote, speaker, onClick}) {
  return (
    <Container>
      <Quote >{quote}</Quote>
      <Speaker >{speaker}</Speaker>
      <Button onClick={onClick} name={'jutsu'}/>
    </Container>
  )
}

Quotes.prototype = {
  quote: string,
  speaker: string
}

const Container = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Quote = styled.p`
  font-size: 2em;
  margin: 0;
`
const Speaker = styled(Quote)`
  text-align: right;
  margin-bottom: 50px;
`