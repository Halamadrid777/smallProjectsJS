"use strict";

var colours = require('colours');

console.log(colours.rainbow('Hello World'));
console.log(colours.rainbow('Hello '));

var _require = require('electron'),
    remote = _require.remote;

console.log(remote.process);