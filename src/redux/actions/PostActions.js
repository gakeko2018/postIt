export const createPost_in_PostActions = post_in_postactions => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async calls to the database
    const firestore_in_postactions = getFirestore();
    const profile = getState().firebase_in_allreducers.profile;
    const authorID = getState().firebase_in_allreducers.auth.uid;
    firestore_in_postactions
      .collection("posts")
      .add({
        ...post_in_postactions,
        firstName: profile.firstName,
        lastName: profile.lastName,
        authorID: authorID,
        createdAt: new Date()
      }) 
      .then(() => {
        dispatch({
          type: "CREATE_POST",
          post_in_postactions //post_in_postactions: post_in_postactions
        });
      })
      .catch(err => {
        dispatch({
          type: "CREATE_POST_FAILED",
          err //post_in_postactions: post_in_postactions
        });
      });
  };
};
