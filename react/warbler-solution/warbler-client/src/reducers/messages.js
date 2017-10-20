const messages = (state=[], action) => {
  switch(action.type) {
    case "LOAD_MESSAGES":
      return [...action.messages];
    case "ADD_MESSAGE":
      return [action.message, ...state];
    default:
      return state;
  }
};

export default messages;
