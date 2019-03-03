import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut_in_AuthActions } from "../../redux/actions/AuthActions";

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New PostIt</NavLink>
      </li>
      <li>
        <a onClick={props.signout_in_Signedinlinks}> Log Out </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating lighten-1">
          {props.profile.Initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  console.log("SIGNED IN LINKS ICERISINDEN UYARI 9:");
  console.log(this.props);
  return {
    signout_in_Signedinlinks: () => dispatch(signOut_in_AuthActions())
  };
};
export default connect( null,
  mapDispatchToProps
)(SignedInLinks);
