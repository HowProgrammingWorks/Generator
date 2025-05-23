'use strict';

// Run `helpers/server.js` for this example to work.

const getJSON = require('./helpers/get-json.js');
const doMonad = require('./helpers/do-notation.js');

const baseUrl = 'http://localhost:3000/';
doMonad(function* () {
  const api = yield getJSON(baseUrl);
  for (const resource of api.resources) {
    const data = yield getJSON(baseUrl + resource);
    console.log(data);
  }
});
