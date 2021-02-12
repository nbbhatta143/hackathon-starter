import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import { Button } from "@material-ui/core";

class Menu extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <h1>Chat Hub</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/" onClick={this.handleLogout}>
              <Button variant="contained" size="small">
                {" "}
                Logout
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
