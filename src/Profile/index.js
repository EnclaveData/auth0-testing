import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Form, Label } from 'reactstrap'
import { FaUser } from 'react-icons/fa'

import './index.css'

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} })
    const { userProfile, getProfile } = this.props.auth
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile })
      })
    } else {
      this.setState({ profile: userProfile })
    }
  }
  render() {
    const { profile } = this.state
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Card>
            <CardHeader>Profile</CardHeader>
            <CardBody>
              <img src={profile.picture} alt="profile" />
              <div>
                <Form><Label><FaUser /> Nickname</Label></Form>
                <h3>Nickname : {profile.nickname}</h3>
                <h3>Name: {profile.name}</h3>
              </div>
              <pre>{JSON.stringify(profile, null, 2)}</pre>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }
}

export default Profile
