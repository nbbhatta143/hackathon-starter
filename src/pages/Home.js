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
        <h2>Your favorite microblogging platform</h2>
        <SignUpForm/>
        <LoginForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
