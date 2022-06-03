import React from 'react'

export default function Header() {
  return (
    <header className='flex m-5 gap-5 w-4/5 justify-between'>
        <input className='bg-white text-slate-700 p-2 w-full rounded-lg text-xl border-0' type="text" placeholder='Digite um nome para pesquisar'/>
        <button className='bg-white text-slate-700 p-2 rounded-lg font-semibold hover:bg-green-400' type='submit'>Buscar</button>
    </header>
  )
}
