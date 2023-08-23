import React from 'react'

const Nav = ({className}) => {
  return (
    <nav className= {className}>
        <a href="#">Inicio</a>
        <a href="#">Series</a>
        <a href="#">Peliculas</a>
        <a href="#">Mas recientes</a>
        <a href="#">Mi lista</a>
    </nav>
  )
}

export default Nav
