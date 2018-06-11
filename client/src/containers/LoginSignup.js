import React from 'react';
import { LoginForm } from '../components/LoginSignup/LoginForm';
import { SignupForm } from '../components/LoginSignup/SignupForm';

export default class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_password: '',
      user_email: '',

      server_message: '',
      server_error: false,
      in_view : this.props.in_view || 'login',
      }
    this.apiUserAuth = 'http://localhost:4000/user';
    this.apiUserNew = 'http://localhost:4000/users';
  }

  handleView(target) {
      console.log('Change view to :', target);
      this.setState({'in_view' : target})
  }

  handleTyping(event) {
    if (event.target.id === 'username') {
      this.setState({'user_name' : event.target.value});
    } else if (event.target.id === 'password'){
      this.setState({'user_password' : event.target.value});
    } else {
      this.setState({'user_email': event.target.value})
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    let ApiRoute
    if (event.target.id === 'login') {
      console.log('login');
      ApiRoute = this.apiUserAuth;
    }
    else if (event.target.id === 'signup') {
      console.log('signup');
      ApiRoute = this.apiUserNew;
    }

    await fetch(ApiRoute, {
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.user_name,
        password: this.state.user_password,
        email: this.state.user_email,
      })
    })
      .then(res => res.json())
      .then(res => this.setState({logged_in: res.userData}))
      // .then(res => this.setState({
      //   'server_message' : res.userData? '1': '0',
      //   'server_error': res.error,
      //   'logged_in' : {email: res.email, tokenSeed: res.tokenSeed}
      // }
      // ))
      .then(res => this.props.onComplete(this.state.logged_in))
  }

  renderLogin() {
    return (
      <div>{this.state.logged_in && <p>{this.state.logged_in.username}</p>}
      <LoginForm
        state={this.state}
        onChangeView={() => this.handleView('signup')}
        onSubmit={(e) => this.handleSubmit(e)}
        onChange={(e,value) => this.handleTyping(e, value)}
      />
    </div>
    )
  }

  renderSignup() {
    return (
      <div>{this.state.logged_in && <p>{this.state.logged_in.username}</p>}

      <SignupForm
      state={this.state}
      onChangeView={() => this.handleView('login')}
      onSubmit={(e) => this.handleSubmit(e)}
      onChange={(e,value) => this.handleTyping(e, value)}
    />
  </div>
  )
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
