import { ADD_POST, ADD_POST_ERR } from "../actions/postAction";

var initialState = {
  allPosts: [],
  addPostStatus: "not done",
  loader: "sof"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        addPostStatus: "done",
        loader: new Date()
      };
    case ADD_POST_ERR:
      return {
        addPostStatus: "error",
        loader: new Date()
      };
    default:
      return state;
  }
}
