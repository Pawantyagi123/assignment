import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Features from './Pages/Features'
import Contact from './Pages/Contact'


export default function MainLayout() {
  return (
    <div>
      <Header/>
    <Home/>
    <About/>
    <Features/>
    <Contact/>
      <Footer/>
    </div>
  )
}
