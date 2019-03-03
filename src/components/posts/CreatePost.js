import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost_in_PostActions } from "../../redux/actions/PostActions";
import { Redirect } from "react-router-dom"

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = f => {
    f.preventDefault();
    // console.log(this.state);
    this.props.createPost_in_createPost(this.state);
    this.props.history.push("/"); // redirect routing
  };

  render() {

    if (!this.props.auth_in_createpost.uid) return <Redirect to="/signin" />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Create New Post-it</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Post Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn purple">Post It</button>
          </div>
        </form>
      </div>
    );
  }
} 


const mapStateToProps = state => {
  return {
    auth_in_createpost: state.firebase_in_allreducers.auth

  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost_in_createPost: post_in_create_post =>
      dispatch(createPost_in_PostActions(post_in_create_post))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
