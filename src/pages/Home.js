import React from "react";
import SignUpForm from "../components/signUpForm/signUpForm";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Welcome to Chat Hub</h2>
        <div className="display">
          <div className="login">
            <LoginForm />
          </div>
          <div className="signup">
            <SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
