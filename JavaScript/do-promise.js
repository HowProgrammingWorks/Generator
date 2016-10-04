'use strict';

const getJSON = require('./get-json');
const doMonad = require('./do-notation');

const baseUrl = 'http://localhost:3000/';
doMonad(function* () {
  let api = yield getJSON(baseUrl);
  for (let resource of api.resources) {
    let data = yield getJSON(baseUrl + resource);
    console.log(data);
  }
});
