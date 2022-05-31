import { GlobalStyle } from './components/Global/GlobalStyle'
import Layout from './components/Layout'
import Profile from './components/Profile'

function App() {

  return (
  <main>
    <GlobalStyle/>
    <Layout>
      <Profile />
    </Layout>
  </main>
  )
}

export default App
