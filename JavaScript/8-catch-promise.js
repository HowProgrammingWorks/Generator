'use strict';

// Run `helpers/server.js` for this example to work.

const getJSON = require('./helpers/get-json');
const doMonad = require('./helpers/do-notation');

const baseUrl = 'http://localhost:3000/';
doMonad(function* () {
  let api = yield getJSON(baseUrl);
  for (let resource of api.resources) {
    let data = yield getJSON(baseUrl + resource);
    console.log(data);
  }
}).catch(e => {
  console.log(e);
});
