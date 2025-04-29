import React from 'react'
import "./Header.css"
// import LoadingBar from './Loading-Bar'
import searchLogo from "./search.png"
import logo from "./logo.png"
import { NavLink } from 'react-router-dom'

const Header = () => {

  function search() {
    alert("Coming Soon...")
  }

  return (
    <>
      <header className="header">

        {/* <LoadingBar /> */}

        <div className='mainHeader'>

          <NavLink to="/" className="No-Underline">
            <div className='logoAndName'>
              <img src={logo} alt='logo'></img>
              <div className='libraryName'>
                <div>Sanskar</div>
                <div>E-Library</div>
              </div>
            </div>
          </NavLink>

          <div className='searchBar'>
            <div>
              <input type='search' placeholder='Search'></input>
              <button onClick={search} type='search'><img src={searchLogo} alt='search'></img></button>
            </div>
          </div>

        </div>

        <div className="navbar">

          <div className='lists'>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/"><li>Home</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/books"><li>Books</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/about"><li>About</li></NavLink>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/contact-us"><li>Contact Us</li></NavLink>
          </div>

          <div className='login'>
            <NavLink className={(e) => { return e.isActive ? "navFocus No-Underline" : "No-Underline" }} to="/login"><li>Login</li></NavLink>
          </div>

        </div>

      </header>
    </>
  )
}

export default Header