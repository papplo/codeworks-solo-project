import React from 'react';

import {Input}  from '../../components-styled/forms/Input';
import Button from '../../components-styled/buttons/Button';


export const LoginForm = (props) => {
return (
  <div>
    <section className="login-form is-centered">
      <form
      onChange = {(e,value) => props.onChange(e, value)}>
        <label><h3>Login to Tellus</h3></label>
        {props.state.server_error && <p>props.state.server_message</p>}
        <Input id="username" placeholder="Username" />
        <Input id="password" placeholder="Password" />
      </form>
      <Button
        id='login'
        onClick={props.onSubmit}
        round="true"
        color="var(--theme-primary-color)"
        size="true">Login</Button>
    </section>

    <section className="signup-form is-centered">
      <h3>Don't have an account yet?</h3>
        <Button onClick={props.onChangeView} color="var(--theme-primary-color)">Signup</Button>
    </section>
  </div>
  );
}
