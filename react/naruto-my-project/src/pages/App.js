
import styled from 'styled-components'
import { GlobalStyle } from '../GlobalStyle';
import { Quotes } from '../components/Quotes/Quotes';
import narutoImg from '../images/naruto.png'
export function App() {
  return (
    <>
    <GlobalStyle/>
    <Content>
      <Quotes quote={'test'} speaker={'speaker'}/>
      <NarutoImg src={narutoImg} alt='Naruto Uzumaki'/>
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