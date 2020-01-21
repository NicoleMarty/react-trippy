import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import './style.css'

class NavBar extends React.Component {
  componentDidMount () {
    M.AutoInit()
  }
  redirect = location => {
    this.props.history.push(location)
  }
  render () {
    return (
      <div className='nav'>
        <nav className='nav-extended'>
          <div className='nav-wrapper'>
            <a href={this} className='brand-logo'>
              Trippy
            </a>
            <a
              href={this}
              data-target='mobile-demo'
              className='sidenav-trigger'
            >
              <i className='material-icons'>menu</i>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li className='login'>
                <Link
                  to='/'
                  className={
                    window.location.pathname === '/' ||
                    window.location.pathname === '/Home'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  LOG IN
                </Link>
              </li>
              <li className='signup'>
                {/* Modal Trigger */}
                <a
                  className='waves-effect waves-light btn modal-trigger'
                  href='#modal1'
                >
                  SIGN UP
                </a>
                <div id='modal1' className='modal'>
                  <div className='modal-content'>
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                  </div>
                  <div className='modal-footer'>
                    <a
                      href='#!'
                      className='modal-close waves-effect waves-green btn-flat'
                    >
                      Agree
                    </a>
                  </div>
                </div>
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
                <Link
                  to='/Create'
                  className={
                    window.location.pathname === '/Create'
                      ? 'nav-link-active'
                      : 'nav-link'
                  }
                >
                  CREATE{' '}
                </Link>
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
}

export default NavBar
