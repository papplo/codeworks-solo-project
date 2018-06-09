import React from 'react';
import { Link } from 'react-router-dom';

import Input  from '../../components-styled/forms/Input';
import Button from '../../components-styled/buttons/Button';


export const LoginForm = (props) => {
return (
  <div>
    <section className="login-form is-centered">
      <form
      onChange = {(e,value) => props.onChange(e, value)}>
        <label><h3>Login to Tellus</h3></label>
        <Input id="username" placeholder="Username" />
        <p>{props.server_message? 1 : 2}</p>
        <Input id="password" placeholder="Password" />
        <Button
          onClick={props.onSubmit}
          color="var(--theme-primary-color)"
          size="true">Login</Button>
      </form>
    </section>

    <section className="signup-form is-centered">
      <h3>Don't have an account yet?</h3>
      <Link to="/Digest" className="button button--confirm">
        <Button color="var(--theme-primary-color)">Signup</Button>
      </Link>
    </section>
  </div>
  );
}
