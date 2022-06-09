import React from 'react'

export default function RepositoryItem({name, fullname, link}) {
  return (
    <div className='border mt-2 p-2 w-80 h-40  flex flex-col justify-center text-lg'>
      <h2>{name}</h2>
      <h4>Full name: 

      <span> {fullname}</span>
      </h4>
      <a className='hover:text-slate-500 text-cyan-300' href={link} target='_blank' rel='noreferrer'>Go to repository</a>
    </div>
  )
}
