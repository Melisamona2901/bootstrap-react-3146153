import React from 'react'
import { SectionCards } from './components/SectionCards.jsx'
import  './components/SectionCards.css'


export const App = () => {
  return (
    <>
      <div className='container-padre'>
        <h1 className='title-metrika'>Metrika</h1>
        <img  className='icons-redes' src="../public/icons-redes.png" alt="" />
      </div>
      <SectionCards />

    </>
  )
}