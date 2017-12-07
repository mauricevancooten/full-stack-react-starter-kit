const fetchStatusReducer = (state = false, action) => {
  switch (action.type) {
      case 'FETCH_ARTICLES' :
      {
        return true
      }
  }
  return state
}

export default fetchStatusReducer
