import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { User } from './MessageObjects';
import { Socket } from './Socket'

export class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    Socket.emit('user', {
      'user': new User(profile.getName(), profile.getImageUrl(), false)
    });
  }

  render () {
    return (
      <div id="google-login">
      <GoogleLogin
          clientId="214008122220-0ma5c1reanps1fqvqdt8bdrbfops9kn6.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }

}