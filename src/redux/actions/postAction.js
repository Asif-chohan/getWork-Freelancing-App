import { db } from "../../firebase";
import toastr from "toastr";
export const ADD_POST = "ADD_POST";
export const ADD_POST_ERR = "ADD_POST_ERR";

export const addPost = data => {
  return dispatch => {
    db.collection("posts")
      .add(data)
      .then(function(docRef) {
        const id = docRef.id;
        // const Taskdata = docRef.data();
        const dataToStore = { id, ...data };
        toastr.success("successfully posted");
        dispatch({
          type: ADD_POST,
          payload: dataToStore
        });
      })
      .catch(function(error) {
        dispatch({
          type: ADD_POST_ERR
        });
        toastr.error("Error occured. Please try again later");
      });
  };
};
