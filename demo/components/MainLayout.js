"use client"
import React from 'react'
import About from './about/about'
import HomeContent from './homeContent/HomeContent'
import Features from './features/Features'
import Service from './service/Service'
import Process from './process/Process'
import Contact from './contact/Contact'

function MainLayout() {
  return (
    <>
    <HomeContent/>
    <Features/>
      <About/>
      <Service/>
      <Process/>
      <Contact/>
    </>
  )
}

export default MainLayout
