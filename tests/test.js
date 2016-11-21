const test = require('tape')
const reducer = require('../reducer')


test('function sorts by alcohol percent', (t) => {
  const state = {
    "beers":[
  {
      "name": "Brewdog Black Hammer",
      "brewery": "BrewDog Brewery",
      "country": "Scotland",
      "style": "Black IPA",
      "abv": "7.2%"
    },
    {
      "name": "Horse Box Black Stallion",
      "brewery": "Horse Box",
      "country": "NZ",
      "style": "Milk Stout",
      "abv": "5%"
    },
    {
      "name": "Schipper's Maverick",
      "brewery": "Schipper's",
      "country": "New Zealand",
      "style": "IPA",
      "abv": "6.7%"
    }
  ]}

  const expected = {
    "beers":[
  {
      "name": "Brewdog Black Hammer",
      "brewery": "BrewDog Brewery",
      "country": "Scotland",
      "style": "Black IPA",
      "abv": "7.2%"
    },
    {
      "name": "Schipper's Maverick",
      "brewery": "Schipper's",
      "country": "New Zealand",
      "style": "IPA",
      "abv": "6.7%"
    },
    {
      "name": "Horse Box Black Stallion",
      "brewery": "Horse Box",
      "country": "NZ",
      "style": "Milk Stout",
      "abv": "5%"
    }
]}

  const actual = reducer(state, {type: 'ORDER_BY_ABV'})
  t.deepEquals(actual, expected, 'test passing')

  t.end()
} )
