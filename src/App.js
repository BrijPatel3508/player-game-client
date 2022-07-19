import './App.css';
import './Assests/styles/inputField.css'
import './Assests/styles/forms.css'
import './Assests/styles/dialog.css'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import React from 'react-dom';
import Home from './components/home.component'
import Register from './components/register.component'
import { Component } from 'react';
import Login from './components/login.component';
import authService from './services/auth.service';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = authService.getCurrentUser();
    this.setState({ currentUser: user });
  }

  logOut() {
    authService.logout();
    this.setState({ currentUser: undefined });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
          <Link to={"/home"} className="navbar-brand">
            DEMO
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item nav-link">
                {currentUser.username}
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="" element={<Navigate to="/home" replace />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;