const html = require('yo-yo')
const beer = require('./beer')
const beersAPI = require('../requests/beersAPI')

const template = (state, dispatch) => {
  return html`
  <div>
    <h1>BEERS</h1>
    <ul>
      ${state.loading ? html`<div>LOADING...</div>` : ''}
      ${beer(state, dispatch)}
    </ul>
    <button onclick=${() => {
      dispatch({type: 'TOGGLE_LOADING'})
      beersAPI.getBeers(state, dispatch)}
   }>Refresh</button>
  </div>
  `
}


module.exports = template
