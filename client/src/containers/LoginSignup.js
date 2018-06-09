import React from 'react';
import { LoginForm } from '../components/LoginSignup/LoginForm';

export default class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_password: '',
      server_message: '',
      server_error: false,
      }
  }



  handleTyping(event) {
    console.log('este',event.target.id,event.target.placeholder,'', event.target.value);
    if (event.target.id === 'username') {
      console.log('yes');
      this.setState({'user_name' : event.target.value});
      console.log(this.state.user_name);
    }
    else {
      console.log('pass');
      this.setState({'user_password' : event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const apiUserAuth = 'http://192.168.1.148:4000/user';
    console.log('aqui ',this.state.user_name);

    fetch(apiUserAuth, {
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
      body: JSON.stringify({
        username: this.state.user_name,
        password: this.state.user_password,
      })
    }).then(res => res.json())
      .then(res => this.setState({'server_message' : res.message}))
        //console.log(this.state.server_message)// .then(res => console.log(res))
  }



  render() {
    return (
      <LoginForm
        state={this.state}
        onSubmit={(e) => this.handleSubmit(e)}
        onChange={(e,value) => this.handleTyping(e, value)}/>
    );
  }
}
