import React, { Component } from "react";
import { connect } from "react-redux";

class LoginBtn extends Component {
  render() {
    const { login, logout, isLoggedIn } = this.props;
    return (
      <div className="mt-4 mb-4">
        {isLoggedIn ? (
          <button className="btn btn-primary" onClick={logout}>
            Logout
          </button>
        ) : (
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch({ type: "LOGIN" }),
  logout: () => dispatch({ type: "LOGOUT" })
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginBtn);
