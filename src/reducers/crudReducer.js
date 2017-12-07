const crudReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES':
      {
        return [...state, action.payload]
      }
    case 'FETCH_ARTICLE_REJECTED':
      {
        return action.payload
      }
      case 'DELETE_ARTICLE' :
      {
        return state.filter( item => {return item._id !== action.payload})
      }
      case 'UPDATE_ARTICLE' :
      {
        return state.map(item => {
            return item._id === action.id ? {...item, title: action.payload.title, handle: action.payload.handle, content: action.payload.content} : item
          })
      }
      case 'REFRESH_ARTICLES':
      {
        return action.payload

      }
  }
  return state
}

export default crudReducer
