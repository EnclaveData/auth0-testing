import React, { Component } from 'react'
import { Button, Jumbotron, Navbar, NavbarBrand } from 'reactstrap'
import './App.css'

import TitleLogo from './TitleLogo'

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
          <NavbarBrand href='/'><TitleLogo /></NavbarBrand>
          {
            isAuthenticated() && (
							<div>
                <Button color='primary' onClick={this.goTo.bind(this, 'dashboard')}>Dashboard</Button>
                <Button color='secondary' onClick={this.goTo.bind(this, 'profile')} >Profile</Button>
                <Button color='secondary' onClick={this.logout.bind(this)} >Logout</Button>
							</div>
            )
          }
          {
            !isAuthenticated() && (
              <Button color='primary' onClick={this.login.bind(this)} >Login</Button>
            )
          }
        </Navbar>
        {
          isAuthenticated() && (
				    <div>
				      <Jumbotron>
				        <h3>Application</h3>
				       </Jumbotron>
				    </div>
					)
				}
      </div>
    )
  }
}

export default App
