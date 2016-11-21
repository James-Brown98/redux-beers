const clone = require('clone')

const reducer = (state, action) => {
  const newState = clone(state)

  switch(action.type){
    case 'FETCH_BEERS':
      newState.beers = action.payload
      return newState
    case 'TOGGLE_LOADING':
     newState.loading = !newState.loading
     return newState
    case 'TOGGLE_STYLE':
      newState.showStyle = !newState.showStyle
      return newState
    case 'ORDER_BY_ABV':
      newState.beers.sort(function (a, b) {
        // a.abv > b.abv ? -1 : 1
        if (a.abv > b.abv) return -1
        else if(a.abv < b.abv) return 1
        return 0
      })
      return newState
    default:
      return newState
  }
}

module.exports = reducer
