import React from 'react'
import M from 'materialize-css'

class Home extends React.Component {
  componentDidMount () {
    M.AutoInit()
    M.Toast.dismissAll()
  }

  redirect = location => {
    this.props.history.push(location)
  }

  render () {
    return <div className='row'>Home</div>
  }
}

export default Home
