import React from 'react'
import GithubHooks from '../../Hooks/GithubHooks'
import Header from '../Header/Header'

export default function index({ children }) {
  const {gitHub} = GithubHooks()
  return (
    <section>
        <Header/>
        {gitHub.loading ? <>Loading</>: <>{children}</> }
    </section>
  )
}
