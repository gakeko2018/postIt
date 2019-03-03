import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const links = props.auth_in_navbar.uid ? (
    <SignedInLinks profile={props.profile}/>
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav className="nav-wrapper pink darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          <i className="material-icons">view_module</i>
          postIT
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log("NAVBAR STATE UYARI 8 ::::");
  console.log(state);

  return {
    auth_in_navbar : state.firebase_in_allreducers.auth,
    profile: state.firebase_in_allreducers.profile

  };
};
export default connect(mapStateToProps)(Navbar);
