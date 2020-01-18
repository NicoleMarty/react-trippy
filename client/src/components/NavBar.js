import React from 'react'

function NavBar () {
  return (
    <div className='nav'>
      <nav className='nav-extended'>
        <div className='nav-wrapper'>
          <a href={this} className='brand-logo'>
            Logo
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
            <li className='tab'>
              <a href='#test1'>HOME</a>
            </li>
            <li className='tab'>
              <a className='active' href='#test2'>
                ABOUT
              </a>
            </li>
            <li className='tab'>
              <a href='#test4'>CREATE</a>
            </li>
            <li className='tab'>
              <a href='#test5'>EXPLORE</a>
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

      <ul class='sidenav' id='mobile-demo'>
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
