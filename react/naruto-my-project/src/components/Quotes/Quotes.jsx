/* eslint-disable jsx-a11y/aria-role */
import styled from "styled-components"
export function Quotes({quote, speaker}) {
  return (
    <Container>
      <Quote >{quote}</Quote>
      <Speaker >{speaker}</Speaker>
      <button>jutsu</button>
    </Container>
  )
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