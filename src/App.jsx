import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Books_Page from './components/Books_Page'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Newly_Added_Books from './components/newly_added_books'
import Recommended_Books from './components/Recommended_Books'
import Popular_Books from './components/Popular_Books'
import PasswordReset from './components/Password-reset'
import Register from './components/Register'
import PasswordSuggestion from './components/Password-suggestion'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "/books",
      element: <><Header/><Books_Page/><Footer/></>
    },
    {
      path: "/about",
      element: <><Header/><About/><Footer/></>
    },
    {
      path: "/contact-us",
      element: <><Header/><Contact/><Footer/></>
    },
    {
      path: "/login",
      element: <><Header/><Login/><Footer/></>
    },
    {
      path: "/newly_added_books",
      element: <><Header/><Newly_Added_Books/><Footer/></>
    },
    {
      path: "/recommended_books",
      element: <><Header/><Recommended_Books/><Footer/></>
    },
    {
      path: "/popular_books",
      element: <><Header/><Popular_Books/><Footer/></>
    },
    {
      path: "/password-reset",
      element: <><Header/><PasswordReset/><Footer/></>
    },
    {
      path: "/register",
      element: <><Header/><Register/><Footer/></>
    },
    {
      path: "/password-suggestion",
      element: <><Header/><PasswordSuggestion/><Footer/></>
    },
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App