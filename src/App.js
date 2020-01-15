import React from 'react'
import logo from './logo.jpg'
import AppContainer from './components/AppContainer'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import './App.css'

function App () {
  return (
    <div className='App'>
      <AppContainer>
        <div className='div'>
          <TopNav />
          <div className='home'>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
          <Footer />
        </div>
      </AppContainer>
    </div>
  )
}

export default App
