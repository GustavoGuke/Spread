import './index.css'

import { GlobalStyle } from './components/Global/GlobalStyle'
import Layout from './components/Layout'
import Profile from './components/Profile'
import Repositories from './components/Ropositories'

function App() {

  return (
  <main className='text-white'>
    <GlobalStyle/>
    <Layout>
      <Profile />
      <Repositories/>
    </Layout>
  </main>
  )
}

export default App
