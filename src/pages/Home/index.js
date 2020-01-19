import React from 'react'
import M from 'materialize-css'
import './style.css'

class Home extends React.Component {
  componentDidMount () {
    M.AutoInit()
    M.Toast.dismissAll()
  }

  redirect = location => {
    this.props.history.push(location)
  }

  render () {
    return <div className='row'></div>
  }
}

export default Home
