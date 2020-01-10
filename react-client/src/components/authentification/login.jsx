import React from "react";
import { Redirect } from 'react-router-dom';
import $ from "jquery";
import Form from './index.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      email: "",
      password: "",
    }
    this.saveValue = this.saveValue.bind(this)
    this.sendInfo = this.sendInfo.bind(this);
  }
  saveValue(e) {
    document.querySelector('.error').style.display = "none";
    this.setState({ [e.target.name]: e.target.value })
  }
  sendInfo(e) {
    $.post('/auth/login', this.state)
      .then(result => {
        if (!result.found) {
          document.querySelector('.error').innerText = result.msg;
          document.querySelector('.error').style.display = "block";
        } else {
          localStorage.setItem('token', result.token)
          this.setState({ logged: true })
        }
      })
    e.preventDefault();

  }
  render() {
    return (
      <div className="flex">
        <div id="welcome" className="outline w-50 pa3 mr2"></div>
        <div id="login" className="outline w-50 pa3 mr2">
          <h1>Login</h1>
          <Form  className='mt0'>
            <label>Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.saveValue} />
            <br />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.saveValue} />
            <br />
            <input type="submit" onClick={this.sendInfo} value="Login" />
            <br />
            <a href="/signup">Sign Up</a>
          </Form>
          <h1 className="error" style={{ display: "none" }}></h1>
          {this.state.logged && <Redirect to="/" />}
        </div>
      </div>
    );
  }
}

export default Login;
