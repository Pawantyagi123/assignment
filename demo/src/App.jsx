import './App.css'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import ErrorPage from './components/ErrorPage'
import Features from './components/Pages/Features'
import Home from './components/Pages/Home'
import LoginPage from './components/LoginPage'
import MainLayout from './components/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './components/SignupPage'

const browserRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout/>,
    children: [
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "features",
        element: <Features/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <SignupPage/>
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
