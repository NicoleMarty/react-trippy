import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppContainer from './components/AppContainer'
import NavBar from './components/NavBar/index.js'
import Home from './pages/Home/index.js'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          {/*<Route render={history => <SideNav history={history} />} />*/}
          <AppContainer>
            <NavBar />
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home} />
          </AppContainer>
        </div>
      </Router>
    )
  }
}

export default App
