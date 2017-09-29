"use strict";

var http = require('http');
var express = require('express');
var app = express;

var server = http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-type': 'application/json' });
  res.write(req.url);
  res.end('\nFinished Processing');
});

server.listen(8080);