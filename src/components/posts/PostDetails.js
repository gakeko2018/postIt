import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";
import { Redirect } from "react-router-dom"

function PostDetails(props) {
  // let title, postContent, author, postdate = "";
  // console.log("UYARI 7 POST DETAILS ICI:")
  // console.log(props.posts_in_postdetails)
  const postId = props.match.params.id;
if (props.posts_in_postdetails) {
//   //const post = "yoook" && props.posts_in_postdetails.filter(item=>item.id===postId)
//   console.log("POST:::::")
// console.log(post)
//  title = post[0].title;
//  postContent = post[0].content;
// author = post[0].firstName + " "+ post[0].lastName;
//  //postdate = (post[0].createdAt.seconds).toDateString();

if (!props.auth_in_postdetails.uid) return <Redirect to="/signin" />

 return (
  <div className="container section project-details">
    <div className="card z-depth-1">
      <div className="card-content">
        <span className="card-title"> {props.posts_in_postdetails.title}</span>
        <p>
          {props.posts_in_postdetails.content}
        </p>
      </div>
      <div className="card-action pink lighten-4 purple-text">
        <div>{props.posts_in_postdetails.firstName + " " + props.posts_in_postdetails.lastName}</div>
        <div>{props.posts_in_postdetails.createdAt.toDate().toString()}</div>
        <div>{moment(props.posts_in_postdetails.createdAt.toDate()).calendar()}</div>

      </div>
    </div>
  </div>
) 
} else return (
  <div className="container section project-details">
    "LOADING DATA..."
  </div>)
  

}

const mapStateToProps = (state,ownprops) => {
const abc = state.firestore_in_allreducers.data.posts; // NOT: OBSERVE DATA HERE
  console.log("MAP STATE ICINDEYIZ::::");
  console.log(abc);
  const thepost= abc ?  abc[ownprops.match.params.id] : null
  console.log(thepost);

  return     {posts_in_postdetails: thepost, 
    auth_in_postdetails: state.firebase_in_allreducers.auth
  }   //state.posts_in_allreducers.posts_in_postreducer //dummy data

}
export default compose (firestoreConnect([{collection:"posts"}]), connect(mapStateToProps)
)(PostDetails);

//export default connect(mapStateToProps) (PostDetails); Bu da çalışıyor

