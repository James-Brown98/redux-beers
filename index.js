const {createStore} = require('redux')
const html = require('yo-yo')

const template = require('./views/beers')
const reducer = require('./reducer')
const beersAPI = require('./requests/beersAPI')


var initialState = {
  beers: [],
  loading: true,
  showStyle: false,
  searched: []
}

const {dispatch, getState, subscribe} = createStore(reducer, initialState)

beersAPI.getBeers(getState(), dispatch)

const updateView = () => {
  const currentState = getState()
  const newView = template(currentState, dispatch)
  html.update(view, newView)
}

subscribe(updateView)

const view = template(initialState, dispatch)
document.body.appendChild(view)
