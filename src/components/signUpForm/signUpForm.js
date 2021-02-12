import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./signUpForm.css"
import { Input, Button } from '@material-ui/core';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            displayName: "",
            password: ""

        };
    }

    handlesignUp = e => {
        e.preventDefault();
        this.setState({
            username: e.target.value,
            password: e.target.value,
            username: "",
            password: "",
        }) 
        alert(`Thank you ${this.state.displayName}`)
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { loading, error } = this.props;
        return (
            <div className="signUpForm">
                <form id="signUp-form" onSubmit={this.handlesignUp}>
                    <label htmlFor="username">Username</label>
                    <Input
                        type="text"
                        name="username"
                        autoFocus
                        required
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        name="password"
                        required
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <label htmlFor="displayName">Dispaly Name</label>
                    <Input
                        type="displayName"
                        name="displayName"
                        autoFocus
                        required
                        onChange={this.handleChange}
                    />
                    <Button component="button" variant="contained" color="primary"  type="submit" disabled={loading}>
                        Sign Up
          </Button>
                </form>
                {loading && <Spinner name="circle" color="blue" />}
                {error && <p style={{ color: "red" }}>{error.message}</p>}
            </div>
        );
    }
}

export default withAsyncAction("auth", "login")(SignUpForm);