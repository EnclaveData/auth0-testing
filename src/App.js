import React, { Component } from 'react'
import { Button, Navbar, NavbarBrand } from 'reactstrap'
import './App.css'

class App extends Component {
  goTo (route) {
    this.props.history.replace(`/${route}`)
  }

  login () {
    this.props.auth.login()
  }

  logout () {
    this.props.auth.logout()
  }

  render () {
    const { isAuthenticated } = this.props.auth

    return (
      <div className='App'>
        <Navbar>
          <NavbarBrand href='/'>Auth0 Stub</NavbarBrand>
          <Button color='primary' onClick={this.goTo.bind(this, 'home')}>Home</Button>
          {
            !isAuthenticated() && (
              <Button color='primary' onClick={this.login.bind(this)} >Login</Button>
            )
          }
          {
            isAuthenticated() && (
              <Button color='secondary' onClick={this.goTo.bind(this, 'profile')} >Profile</Button>
            )
          }
          {
            isAuthenticated() && (
              <Button color='primary' onClick={this.logout.bind(this)} >Logout</Button>
            )
          }
        </Navbar>
      </div>
    )
  }
}

export default App
