import React, { Component } from "react";
import Notifications from "./Notifications";
import PostList from "../posts/PostList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom"
 
var dizi=[];
class Dashboard extends Component {
  render() {
    let myRegExp = /enem/
    console.log (myRegExp.test("deneme"));
    console.log('PROPS ICI RETURN UYARI : ');
    console.log(this.props.posts_in_dashboard);
    const { posts_in_dashboard } = this.props;
    console.log('PROS ICI CURLY RETURN UYARI2 : ');
    console.log(posts_in_dashboard);
    console.log('RETURN DISI UYARI3 : ');
    console.log(dizi);

    if (!this.props.auth_in_dashboard.uid) return <Redirect to="/signin" />
    return (
      <div className="dasboard container">
        <div className="row">
          <div className="col s12 m6">
            <PostList send_to_postlist={posts_in_dashboard} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={this.props.notifications_in_dashboard} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  dizi = state.firestore_in_allreducers.ordered.posts;
  console.log(state.firestore_in_allreducers.ordered.posts);
  return  {
    posts_in_dashboard: state.firestore_in_allreducers.ordered.posts,    //state.posts_in_allreducers.posts_in_postreducer //dummy data
    auth_in_dashboard: state.firebase_in_allreducers.auth,
    notifications_in_dashboard: state.firestore_in_allreducers.ordered.notifications,    //state.posts_in_allreducers.posts_in_postreducer //dummy data

  }}; 

export default compose(firestoreConnect([
  {collection:"posts",  orderBy:["createdAt","desc"]},
  {collection:"notifications", limit:3, orderBy:["time","desc"]}
]), connect(mapStateToProps)) (Dashboard);
