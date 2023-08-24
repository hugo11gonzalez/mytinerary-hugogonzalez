import React from 'react'

const index = ({titulo, texto}) => {
  return (
    <>
    <article className='text-center'>
        <h2 >{titulo}</h2>
        <p >{texto}</p>
    </article>
    </>
    
  )
}

export default index
