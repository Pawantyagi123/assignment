import './App.css'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import ErrorPage from './components/ErrorPage'
import Features from './components/Pages/Features'
import Home from './components/Pages/Home'
import MainLayout from './components/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import TermsPolicy from './components/TermsPolicy'

const browserRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout/>,
    children: [
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/features",
        element: <Features/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  },
  {
    path: "/termsandPolicy",
    element: <TermsPolicy/>
  }

 ])

function App() {

  return (
    <>
  
   <RouterProvider router={browserRouter}/>
  
    </>
  )
}

export default App
