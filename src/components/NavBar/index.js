import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function NavBar () {
  return (
    <div className='nav'>
      <nav className='nav-extended'>
        <div className='nav-wrapper'>
          <a href={this} className='brand-logo'>
            Trippy
          </a>
          <a href={this} data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='badges.html'>LOG IN</a>
            </li>
            <li>
              <a href='collapsible.html'>SIGN UP</a>
            </li>
          </ul>
        </div>
        <div className='nav-content'>
          <ul className='tabs tabs-transparent'>
            <li className='tab home'>
              <Link
                to='/'
                className={
                  window.location.pathname === '/' ||
                  window.location.pathname === '/Home'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                HOME
              </Link>
            </li>
            <li className='tab about'>
              <Link
                to='/About'
                className={
                  window.location.pathname === '/About'
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                ABOUT
              </Link>
            </li>
            <li className='tab create'>
              <a href='/Create'>CREATE</a>
            </li>
            <li className='tab explore'>
              <a href='/Explore'>EXPLORE</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <a href='badges.html'>LOG IN</a>
        </li>
        <li>
          <a href='collapsible.html'>SIGN UP</a>
        </li>
      </ul>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <a href='sass.html'>Sass</a>
        </li>
        <li>
          <a href='badges.html'>Components</a>
        </li>
        <li>
          <a href='collapsible.html'>Javascript</a>
        </li>
        <li>
          <a href='mobile.html'>Mobile</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
