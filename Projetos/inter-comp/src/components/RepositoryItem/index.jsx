import React from 'react'

export default function RepositoryItem({name, fullname, link}) {
  return (
    <div>
      <h2>{name}</h2>
      <h4>Full name: 

      <span> {fullname}</span>
      </h4>
      <a className='hover:text-slate-500' href={link} target='_blank' rel='noreferrer'>Go to repository</a>
    </div>
  )
}
