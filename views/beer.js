const html = require('yo-yo')

module.exports = (arr) => {
  return arr.map((beer) => html`
    <li class='beer'>
      <div>
      <h3>${beer.name}</h3>
      ${beer.abv}<br>
      ${beer.style}<br>
      ${beer.brewery}<br>
      ${beer.country}
      </div>
    </li>
    `
  )
}
