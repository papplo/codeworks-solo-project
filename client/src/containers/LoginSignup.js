import React from 'react';
import { LoginForm } from '../components/LoginSignup/LoginForm';
import { SignupForm } from '../components/LoginSignup/SignupForm';

export default class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_password: '',
      logged_in: 'false',
      server_message: '',
      server_error: false,
      in_view : 'login'
      }
    this.apiUserAuth = 'http://localhost:4000/user';
  }

  handleView(target) {
      console.log('Change view to :', target);
      this.setState({'in_view' : target})
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

    // if (event.target.id === 'login') {
    //   console.log('login');
    //   this.apiUserAuth = this.apiUserAuth + 'user';
    // }
    // else if (event.target.id === 'signup') {
    //   console.log('signup');
    //   this.apiUserAuth = this.apiUserAuth + 'users';
    // }
    //
    //

    fetch(this.apiUserAuth, {
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

  renderLogin() {
    return <LoginForm
      state={this.state}
      onChangeView={() => this.handleView('signup')}
      onSubmit={(e) => this.handleSubmit(e)}
      onChange={(e,value) => this.handleTyping(e, value)}
    />
  }

  renderSignup() {
    return <SignupForm
      state={this.state}
      onChangeView={() => this.handleView('login')}
      onSubmit={(e) => this.handleSubmit(e)}
      onChange={(e,value) => this.handleTyping(e, value)}
    />
  }

  render() {
    let inView = 'login here';
    if (this.state.in_view === 'login') {
      inView = this.renderLogin()
    } else if (this.state.in_view === 'signup') {
      inView = this.renderSignup()
    }

    return (
      <div>
        {inView}
      </div>
    );
  }
}