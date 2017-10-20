export const userLogout = () => ({
  type: "USER_LOGOUT"
});

export const authenticateUser = currentUser => ({
  type: "AUTHENTICATE_USER",
  currentUser
});

const authRequest = (authInfo, url) => {
  return fetch(url, {
    method: "post",
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(authInfo)
  })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {authErrorMessage: data.message};
            throw err;
          })
        } else {
          let err = {authErrorMessage: "Please try again later.  Server not responding."};
          throw err;
        }
      }
      return resp.json();
    });
}

export const signUp = (authInfo) => (
  (dispatch, getState) => (
    authRequest(authInfo, '/api/auth/signup')
      .then(currentUser => dispatch(authenticateUser(currentUser)))
  )
);

export const signIn = (authInfo) => (
  (dispatch, getState) => (
    authRequest(authInfo, '/api/auth/signin')
      .then(currentUser => dispatch(authenticateUser(currentUser)))
  )
);

export const loadMessages = (messages) => ({
  type: "LOAD_MESSAGES",
  messages
});

export const fetchMessages = () => (
  dispatch => (
    fetch(`/api/messages`)
      .then(data => data.json())
      .then(m => {
        let messages = m.map(m => {
          return {
            id: m._id,
            createdAt: m.createdAt,
            text: m.text,
            username: m.userId.username,
            profileImageUrl: m.userId.profileImageUrl
          }
        })
        return dispatch(loadMessages(messages));
      })
  )
)

export const addMessage = message => ({
  type: "ADD_MESSAGE",
  message
})

export const postNewMessage = (text) => (
  (dispatch, getState) => {
    let {currentUser} = getState();
    if (!currentUser) { return Promise.resolve(); }

    const {userId, token} = currentUser;
    const url = `/api/users/${userId}/messages`;
    return fetch(url, {
      method: "post",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
      body: JSON.stringify({text})
    })
      .then(resp => {
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              let err = {errorMessage: data.message};
              throw err;
            })
          } else {
            let err = {errorMessage: "Please try again later.  Server not responding."};
            throw err;
          }
        }
        return resp.json();
      })
      .then(m => {
        let message = {
          id: m._id,
          createdAt: m.createdAt,
          text: m.text,
          username: m.userId.username,
          profileImageUrl: m.userId.profileImageUrl
        }
        return dispatch(addMessage(message));
      });
  }

);
