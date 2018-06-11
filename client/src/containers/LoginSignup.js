import React from 'react';
import { LoginForm } from '../components/LoginSignup/LoginForm';

export default class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_password: '',
      logged_in: 'false',
      server_message: '',
      server_error: false,
      }
  }


  handleTyping(event) {
    if (event.target.id === 'username') {
      this.setState({'user_name' : event.target.value});
    } else {
      this.setState({'user_password' : event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const apiUserAuth = 'http://localhost:4000/user';

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
    })
      .then(res => res.json())
      .then(res => this.setState(
        {'server_message' : res.message, 'server_error': res.error, 'logged_in' : res.username}
      ))
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
