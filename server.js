"use strict";

var express = require('express');

var app = express;

var server = app.createServer(function(req,res) {
  res.writeHead(200, { 'Content-type': 'application/json' });
  res.write(req.url);
});

server.listen(5000);