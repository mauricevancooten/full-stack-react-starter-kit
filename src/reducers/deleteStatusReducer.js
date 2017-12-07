const deleteStatusReducer = (state = false, action) => {
  switch (action.type) {
      case 'DELETE_ARTICLE' :
      {
        return true
      }
  }
  return state
}

export default deleteStatusReducer
