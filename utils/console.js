// ha ha ha ha. sigh.
const JSON = require('circular-json');

document.addEventListener("DOMContentLoaded", function(event) {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message, null, 2) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
    console.log("Console initialized...");
    console.log("Loading index.js...");
    console.log("Executing...");
    console.log("_________________________________________________________________________________");
  });