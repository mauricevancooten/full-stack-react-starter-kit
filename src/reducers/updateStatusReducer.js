const updateStatusReducer = (state = false, action) => {
  switch (action.type) {
      case 'UPDATE_ARTICLE' :
      {
        return true
      }
  }
  return state
}

export default updateStatusReducer
