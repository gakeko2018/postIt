import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { signUp_in_AuthActions} from "../../redux/actions/AuthActions"
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
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
    this.props.signUp_in_signup(this.state)
  };

  render() {
    if (this.props.auth_in_signup.uid) return <Redirect to="/" />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Email</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn purple">Sign Up</button>
            <div className="red-text center">
              {this.props.authError ? `SIGN UP FAILED ${this.props.authError}` : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    auth_in_signup: state.firebase_in_allreducers.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    signUp_in_signup: newUser => dispatch(signUp_in_AuthActions(newUser))
  }
 
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);;
