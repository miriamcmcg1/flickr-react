const initialState = function() {
  const storage = JSON.parse(localStorage.getItem('search'))
  if(storage !== null) {
    return {city: storage.city, limit: storage.limit }
  }
  else {
    return {city: 'cuba', limit: 21}
  }
}

const search = (state = initialState(), action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
        return {
            city: action.city,
            limit: action.limit
          }
    default:
      return state
  }
}

export default search;
