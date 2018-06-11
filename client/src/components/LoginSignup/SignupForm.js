import React from 'react';
import { Link } from 'react-router-dom';

import Input  from '../../components-styled/forms/Input';
import Button from '../../components-styled/buttons/Button';


export const SignupForm = (props) => {
return (
  <div>
    <section className="login-form signup-form is-centered">
      <form
      onChange = {(e,value) => props.onChange(e, value)}>
        <label><h3>Signup to Tellus</h3></label>
        {props.state.server_error && <p>props.state.server_message</p>}
        <Input id="username" placeholder="Username" />
        <Input id="email" placeholder="E-Mail" />
        <Input id="password" placeholder="Password" />
        <Button
          id='signup'
          onClick={props.onSubmit}
          color="var(--theme-primary-color)"
          size="true">Sign Up</Button>
      </form>
    </section>

    <section className="signup-form is-centered">
      <h3>Already a Member?</h3>
        <Button onClick={props.onChangeView} color="var(--theme-primary-color)">Login to Tellus</Button>
    </section>
  </div>
  );
}
