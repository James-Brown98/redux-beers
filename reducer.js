const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const { type, payload } = action
  switch(type){
    case 'FETCH_BEERS':
      newState.beers = payload
      return newState
    case 'TOGGLE_LOADING':
     newState.loading = !newState.loading
     return newState
    case 'TOGGLE_STYLE':
      newState.showStyle = !newState.showStyle
      return newState
    case 'ORDER_BY_ABV':
      newState.beers.sort((a, b) => a.abv > b.abv ? -1 : 1)
      return newState
    case 'SEARCH_FOR_BEERS':
      newState.searched = newState.beers.filter((beer) => beer.name.toLowerCase().includes(payload.toLowerCase()))
      return newState
    default:
      return newState
  }
}
