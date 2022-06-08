import './index.css'

import { GlobalStyle } from './components/Global/GlobalStyle'
import Layout from './components/Layout'
import Profile from './components/Profile'
import Repositories from './components/Ropositories'
import GithubProvider from './components/Providers/github.provider'

function App() {

  return (
    <main className='text-white'>
      <GithubProvider>

        <GlobalStyle />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
        
      </GithubProvider>
    </main>
  )
}

export default App
