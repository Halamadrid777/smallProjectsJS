var colours = require('colours');
console.log(colours.rainbow('Hello World'));
console.log(colours.rainbow('Hello '));

const {remote} = require('electron')
console.log(remote.process);