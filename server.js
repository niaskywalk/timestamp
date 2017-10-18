"use strict";

var http = require('http');
var URL = require('url');

var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var server = http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-type': 'application/json' });
  var mypathname = URL.parse(req.url).pathname;
  
  var daterequest = decodeURIComponent(mypathname.slice(1));
  
  var myDate = new Date(daterequest);
  
  // if (myDate.getMonth().toString() !== "NaN") {
  if (!!myDate) {
    var naturaldateformat = monthnames[myDate.getMonth()] + " " + myDate.getDate() + ", " + myDate.getFullYear();
    var z = JSON.stringify({"unix": myDate.getTime(), "natural": naturaldateformat});
    res.write(z);
  } else {
    
    res.write(JSON.stringify({"unix": "null", "natural": "null"}));
  }
  res.end();
});

server.listen(8080);