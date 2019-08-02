const postReducer = (state = [], action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.concat([action.data]);
    default:
      return state;
  }
};
export default postReducer;
