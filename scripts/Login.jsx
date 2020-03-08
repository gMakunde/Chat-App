import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Socket } from './Socket'
/*global gapi*/

export class Login extends React.Component{
  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    let auth = gapi.auth2.getAuthInstance();
    let user = auth.currentUser.get();
    if(user.isSignedIn()) {
      console.log("google token" + user.getAuthResponse().id_token);
    }
    console.log("user:", googleUser)
  Socket.emit('user', {
      'user': [googleUser, user.getAuthResponse().id_token]
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