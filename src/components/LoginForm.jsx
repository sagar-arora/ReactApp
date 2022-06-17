import axios from 'axios';
import React from 'react';
import './Login.css';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handlePasswordInputEvent(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleUsernameInputEvent(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleSubmitEvent(event) {
    //axios.get("http://localhost:8080/api/v1/hello")
    const {username, password} = this.state;
    axios.get('http://localhost:8080/api/v1/hello', {
      headers: {
        crossDomain: true,
        Authorization: 'Basic ' + btoa(username + ":" + password) //the token is a variable which holds the token
      }
      }).then((data) => {console.log(data)});

      event.preventDefault();

  }
  
  render() {
    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={(event)=> {this.handleSubmitEvent(event)}}>
          <label>
            <p>Username</p>
            <input type="text" onChange={(event)=>this.handleUsernameInputEvent(event)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={(event)=>this.handlePasswordInputEvent(event)}/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }

}
