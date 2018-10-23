"use strict";

var app = require('../build/app');

app.getResults('aetv').then(function (entries) {
  console.log(entries.length);
});