import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("userDetails")),
  };

  logOut = () => {
      localStorage.removeItem("token")
      localStorage.removeItem("userDetails")
      this.setState({token: "", user: {}})
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div>
          <Link to="/" className="navbar-brand">
            Exercise Tracker
          </Link>
          <div>
            {this.state.token ? (
              <ul className="navbar-nav mr-auto">
                <li>
                  <a className="navbar-brand" href="#">
                    {this.state.user.username}
                  </a>
                </li>
                <li>
                  <button onClick={this.logOut}>Logout</button>
                </li>
              </ul>
            ) : (
              <uL>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </uL>
            )}
          </div>
        </div>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Exercises
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Exercise Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
