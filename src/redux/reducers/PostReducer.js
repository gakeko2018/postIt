const initialState = {
  posts_in_postreducer: [
    {id:"1", title:"title1", content:"content1"}]
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("Post Created", action.post_in_postactions);
      return state;
    case "CREATE_POST_FAILED":
      console.log("Post Failed", action.err);
      return state;
    default:
      return state;
  }
};
 