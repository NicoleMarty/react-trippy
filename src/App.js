import React from 'react'
import logo from './logo.jpg'
import AppContainer from './components/AppContainer'
import './App.css'

function App () {
  return (
    <div className='App'>
      <AppContainer>
        <div className='home'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
      </AppContainer>
    </div>
  )
}

export default App
