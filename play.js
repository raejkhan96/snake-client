const chai = require('chai');
const connect = require('./client.js');
const setupInput = require('./input.js');


console.log('Connecting...');
connect();

setupInput();