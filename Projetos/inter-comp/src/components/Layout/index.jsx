import React from 'react'
import Header from '../Header/Header'

export default function index({ children }) {
  return (
    <section>
        <Header/>
        {children}
    </section>
  )
}
