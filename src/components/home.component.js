import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Dashboard from "./dashboard.component";
import { Link } from "react-router-dom";

// import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    this.setState({ currentUser: user });
  }

  render() {
    return (
      <div className="container">
        {this.state?.currentUser ? (
          <Dashboard />) :
          (<div>Please
            <Link to={"/login"} className="m-0 text-decoration-none"> login </Link>or
            <Link to={"/register"} className="m-0 text-decoration-none"> signup </Link>to see content</div>)
        }
      </div>
    );
  }
}
