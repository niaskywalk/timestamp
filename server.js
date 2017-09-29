"use strict";

var http = require('http');
var URL = require('url');
var express = require('express');
var app = express;

var server = http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-type': 'application/json' });
  var mypathname = URL.parse(req.url).pathname;
  res.write(mypathname.slice(1));
  
  res.end('\nFinished Processing');
});

server.listen(8080);