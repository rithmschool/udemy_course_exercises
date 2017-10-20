const LOCAL_STORAGE_USER_KEY = 'warbler-user-auth-info';

const setCurrentUser = (currentUser) => {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(currentUser));
};

const clearCurrentUser = () => {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
};

export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY));
  } catch(e) {
    return undefined;
  }
};


const currentUser = (state=null, action) => {
  switch(action.type) {
    case "USER_LOGOUT":
      clearCurrentUser();
      return null;
    case "AUTHENTICATE_USER":
      setCurrentUser(action.currentUser);
      return {...action.currentUser};
    default:
      return state;
  }
};

export default currentUser;
