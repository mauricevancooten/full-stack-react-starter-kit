const authReducer = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_USER': {
      return action.payload ? true : false
    }
    case 'LOGOUT_USER' : {
      return false
    }
  }
  return state
}

export default authReducer
