// Import external libs
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

// Import models
const Book = require('../models/book');


module.exports.getJSON =  function (url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    xhr.responseType = 'json'
    xhr.onload = function() {
      if (xhr.status == 200) resolve(JSON.parse(xhr.responseText))
      else reject(xhr.status)
    }
    xhr.send()
  })
}
