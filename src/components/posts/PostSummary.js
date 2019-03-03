import React from "react";
import moment from "moment";

const PostSummary = singlePost => {
  console.log("POSTSUMMARY UYARI 5");
  console.log(singlePost.post);
  if (singlePost.post) {  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{singlePost.post.title}</span>
        <p>{singlePost.post.firstName+" "+singlePost.post.lastName}</p>
        <p className="grey-text">{ moment (singlePost.post.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )}
  else return (
    <div className="container section project-details">
      "LOADING DATA..."
    </div>)
};

export default PostSummary;
