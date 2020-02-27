import React from 'react';
import { GoogleLogin } from 'react-google-login';

export class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();
    console.log({ googleId });
    console.log({accessToken: id_token});
  }

  render () {
    return (
      <div id="google-login">
        <GoogleLogin     
           socialId="myclientId"
           className="google-login"
           scope="profile"
           fetchBasicProfile={true}
           responseHandler={this.responseGoogle}
           buttonText="Login With Google"/>
      </div>
    );
  }

}