import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn_in_AuthActions } from "../../redux/actions/AuthActions";
import { Redirect } from "react-router-dom"

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = f => {
    f.preventDefault();
    //console.log(this.state);
    this.props.signIn_in_signIn(this.state);
  };

  render() {
    if (this.props.auth_in_signin.uid) return <Redirect to="/" />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn purple">Sign In</button>
            <div className="red-text center">
              {this.props.authError ? "TRY AGAIN" : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("SIGN_IN mapStateToProps ICERISINDEN UYARI 10::");
  console.log(state);
  return {
    authError: state.auth.authError, //local state e alıp componente yazdırmak için
    auth_in_signin: state.firebase_in_allreducers.auth
  };
};

const mapDispatchToProps = dispatch => {
  console.log("SIGN_IN mapDispatchToProps ICERISINDEN UYARI 11::");
  console.log(dispatch);
  return {
    signIn_in_signIn: creds => {
      console.log("SIGN_IN mapDispatchToProps ICERISINDEN UYARI 12::");
      console.log(dispatch);
      dispatch(signIn_in_AuthActions(creds));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
