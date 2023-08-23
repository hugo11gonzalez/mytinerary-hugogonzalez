import React from 'react'
import ReactLogo from '../assets/react.svg'
import Nav from '../components/Nav'
const MainLayout = ({children}) => {
  return (
    <div className='w-full h-24 bg-black'>
      <header className='w-100 h-100 flex justify-between items-center'>
        <div className='flex items-center'>
            <img src="./assets/images/M.jpg" alt="" className='w-24' />
            <h1 className='hidden sm:block text-6xl text-white uppercase translate-y-1 -translate-x-6 font-[bebas-new]'>inflix</h1>
            <Nav className= 'flex flex-wrap gap-4 text-white font medium text-lg' />
        </div>
       
      </header>

    </div>
  )
}

export default MainLayout
