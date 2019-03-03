import React from "react";
import PostSummary from "./PostSummary";
import {Link} from "react-router-dom"

/* const PostList = a => {
  const arr = a.send_to_postlist;
  console.log(arr);
  return null&&arr.map(item => {return (<PostSummary title={item.title} key={item.key} />)})

}; */

const PostList = arr => {
  console.log('POSTLIST UYARI 4 : ');
  console.log(arr.send_to_postlist);
  if ( arr.send_to_postlist===undefined) return null
else return  arr.send_to_postlist.map(item => {
  return (
    <Link to={"/posts/"+item.id} key={item.id}>
    <PostSummary post={item}/>
    </Link>
  )
    })
}


/* const ProjectList = ({projects}) => {
  return (
      { projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}  
  )
} */

export default PostList;
