import React from 'react'
import { Redirect, Route, Router } from 'react-router-dom'
import App from './App'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Callback from './Callback'
import Auth from './Auth'
import history from './history'

const auth = new Auth()

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication()
  }
}

export const createMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path='/' render={(props) => <App auth={auth} {...props} />} />
        <Route path='/dashboard' render={(props) => <Dashboard auth={auth} {...props} />} />
        <Route path="/profile" render={(props) => (
          !auth.isAuthenticated() ? (
            <Redirect to="/home"/>
          ) : (
            <Profile auth={auth} {...props} />
          )
        )} />
        <Route path='/callback' render={(props) => {
          handleAuthentication(props)
          return <Callback {...props} />
        }} />
      </div>
    </Router>
  )
}
