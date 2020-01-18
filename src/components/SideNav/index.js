import React from 'react'
import { Link } from 'react-router-dom'
/*import ls from 'local-storage'*/
import './style.css'

class SideNav extends React.Component {
  /*logout = event => {
    ls.remove('TrippyTrip_userToken')
    ls.remove('TrippyTrip_userFullName')
    this.props.history.history.push('/')
    this.closeNav()
  }*/

  render () {
    return (
      <header>
        <ul id='slide-out' className='sidenav'>
          <li>
            <div className='user=view'>
              <a href={this}>
                <img
                  className='circle'
                  src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                  alt='Stock Profile'
                />
              </a>
              <a href={this}>
                {/*<span id='username' className='name white-text'>
                  {ls.get('TrippyTrip_userToken')
                    ? ls.get('TrippyTrip_userFullName')
                      ? ls.get('TrippyTrip_userFullName')
                      : 'Secret Agent User'
                    : 'Please Sign In'}
                </span>*/}
              </a>
            </div>
          </li>
          <li>
            <div className='divider' />
          </li>
          <li style={{ color: 'white' }} className='nav-item'>
            <Link
              to='/home'
              className={
                window.location.pathname === '/' ||
                window.location.pathname === '/home'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={this.closeNav}
            >
              HOME
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className={
                window.location.pathname === '/about'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={this.closeNav}
            >
              ABOUT
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/create'
              className={
                window.location.pathname === '/create'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={this.closeNav}
            >
              CREATE
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/explore'
              className={
                window.location.pathname === '/explore'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              onClick={this.closeNav}
            >
              EXPLORE
            </Link>
          </li>
          <li className='nav-item' onClick={this.logout}>
            <a href={this} className='nav-link'>
              LOG OUT
            </a>
          </li>
        </ul>
        <a href={this} data-target='slide-out' className='sidenav-trigger'>
          <i className='material-icons small menu'>menu</i>
        </a>
      </header>
    )
  }
}

export default SideNav
