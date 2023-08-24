import React from 'react'
import Article from '../Article'
const index = () => {
    let data = [
        {titulo:'Articulo 1', texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sunt porro atque cumque quas eos dolores numquam accusamus nobis sint quia veritatis minima dicta, enim aut nesciunt iure autem ipsam.'},
        {titulo:'Articulo 2', texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sunt porro atque cumque quas eos dolores numquam accusamus nobis sint quia veritatis minima dicta, enim aut nesciunt iure autem ipsam.'},
        {titulo:'Articulo 3', texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sunt porro atque cumque quas eos dolores numquam accusamus nobis sint quia veritatis minima dicta, enim aut nesciunt iure autem ipsam.'}
    ]
  return (
   <main className='w-full h-max bg-orange-100'>
        {data.map((each, indice)=><Article key={indice}titulo={each.titulo} texto={each.texto}></Article>)}
   </main>
  )
}

export default index
