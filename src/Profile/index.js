import React, { Component } from 'react'
import { Form, Label, Card } from 'reactstrap'
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
          <Card header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <Form><Label><span className='glyphicon glyphicon-user'></span> Nickname</Label></Form>
              <h3>{profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Card>
        </div>
      </div>
    )
  }
}

export default Profile
