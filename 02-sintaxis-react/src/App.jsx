import React from 'react'
import "./App.css"
import { NavBar } from './components/NavBar'  
import { ExtensionCard } from './components/ExtensionCard'
import { LoginForm } from './components/LoginForm'
import { ProductCard } from './components/ProductCard'

export const App = () => {
  return (
    <>
     
    <NavBar/>
    <div className="containerCards">
    <ExtensionCard 
    cardTitle="Google Translate"
    cardImage="./public/camara.png"
    cardDescription= "Quickly inspect page layouts and visualize element boundaries."
    />
    <ExtensionCard 
    cardTitle="StyleSpy"
    cardImage="./public/imagen 2 boot.png"
    cardDescription="Instantly analyze and copy CSS from any webpage element."
    />
    <ExtensionCard 
    cardTitle="SpeedBoost"
    cardImage="./public/imagen 3.png"
    cardDescription="Optimizes browser resource usage to accelerate page loading."
    />
    <ExtensionCard 
    cardTitle="JSONWizard"
    cardImage="./public/imagen 4.png"
    cardDescription="Formats, validates, and prettifies JSON responses in-browser."
    />
    <ExtensionCard 
    cardTitle="TabMaster Pro"
    cardImage="./public/imagen_5.png"
    cardDescription="Organizes browser tabs into groups and sessions."
    />
    <ExtensionCard 
    cardTitle="Viewport Buddy"
    cardImage="./public/imagen 6.png"
    cardDescription="Simulates various screen resolutions directly within the browser."
    />
    <ExtensionCard 
    cardTitle="Markup Notes"
    cardImage="./public/imagen 7.png"
    cardDescription="Enables annotation and notes directly onto webpages for collaborative debugging."
    />
    <ExtensionCard 
    cardTitle="GridGuides"
    cardImage="./public/imagen 8.png"
    cardDescription="Overlay customizable grids and alignment guides on any webpage."
    />
    <ExtensionCard 
    cardTitle="Palette Picker"
    cardImage="./public/imagen 9.png"
    cardDescription="Instantly extracts color palettes from any webpage."
    />
  
   
    </div>
    <h1>React + Bootstrap</h1>
    <LoginForm/>

    <div className="container">
      <div className="row">
      <div className="col-12 col-md-6 col-lg-4"> 
    <ProductCard/>
      </div>
      <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0"> 
    <ProductCard/>
      </div>
            <div className="col-12 col-md-12 col-lg-4 mt-4 mt-lg-0"> 
    <ProductCard/>
      </div>
      </div>
    </div>
    </>
  )
}
