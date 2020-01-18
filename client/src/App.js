import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import TopNav from './components/TopNav'
import AppContainer from './components/AppContainer'
import About from './pages/About'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <TopNav />
          {/*<Route render={history => <SideNav history={history} />} />*/}
          <AppContainer>
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/About' component={About} />
          </AppContainer>
        </div>
      </Router>
    )
  }
}

export default App
