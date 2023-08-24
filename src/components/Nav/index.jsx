import React from 'react'
import Anchor from '../Anchor'

const index = () => {
    let data = [
        {href:'MyTineraty', contenido:'MyTineraty'},
        {href:'Home', contenido:'Home'},
        {href:'Cities', contenido:'Cities'},
    ]
  return (
   <nav className='flex space-x-4 gap-4 justify-around'>
    {data.map((each,indice)=><Anchor key={indice} href={each.href} contenido={each.contenido}/>)}
   </nav>
  )
}

export default index
