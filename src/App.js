import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import SideNav from './components/SideNav'
import AppContainer from './components/AppContainer'
import About from './pages/About'
import { AppContext } from './AppContext'
import './App.css'

class App extends Component {
  render () {
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <div>
            <Route render={history => <SideNav history={history} />} />
            <AppContainer>
              <Route exact path='/' component={Home} />
              <Route exact path='/Home' component={Home} />
              <Route exact path='/About' component={About} />
            </AppContainer>
          </div>
        </Router>
      </AppContext.Provider>
    )
  }
}

export default App
