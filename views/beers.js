const html = require('yo-yo')
const beer = require('./beer')
const beersAPI = require('../requests/beersAPI')

module.exports = (state, dispatch) => {
  const { beers, searched } = state
  const searchEvent = (e) => {
    const {value} = e.target
    dispatch({type: 'SEARCH_FOR_BEERS', payload:value})
  }
  return html`
  <div id='container'>
    <div id='header'>
    <h1>BEERS</h1>
    <input onkeyup=${ (e) => searchEvent(e)
    }>Search</input>
    ${Button({type: 'ORDER_BY_ABV'}, 'Order by percent')}
    ${Button({type: 'TOGGLE_LOADING'}, 'Refresh', beersAPI.getBeers)}
    </div>
    <ul>
      ${state.loading ? html`<div class="psoload">
  <div class="straight"></div>
  <div class="curve"></div>
  <div class="center"></div>
  <div class="inner"></div>
</div>` : ''}
      ${beer(searched.length > 0 ? searched : beers)}
    </ul>
  </div>
  `
  function Button (action, label, apiCall) {
    return html`
      <button
        onclick=${() => {
          dispatch(action)
          apiCall(state, dispatch)}}
          >${label}

      </button>`
  }
}
