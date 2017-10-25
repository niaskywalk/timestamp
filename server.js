"use strict";

var http = require('http');
var URL = require('url');

var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var server = http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-type': 'application/json' });
  var mypathname = URL.parse(req.url).pathname;
  var baseJSON = JSON.stringify({"unix": "null", "natural": "null"});
  
  var daterequest = decodeURIComponent(mypathname.slice(1));
  
  var isZero = Object.keys(daterequest).length === 0;
    if (!isZero) {
      var stringDate = String(daterequest);
      // res.write("My stringDate "+ stringDate + " => " + new Date(stringDate) + "\n");
      var numrequest = Number(daterequest);
      // res.write("My numrequest "+ numrequest + " => " + new Date(numrequest) + "\n" + (isNaN(numrequest)) + "\t\n");
      var caseResult;

      switch (isNaN(numrequest)) {
        case true:
            caseResult = stringDate;
            // res.write("The case was True => " + caseResult + "\n");
            break;
        case false:
            caseResult = numrequest;
          // res.write("The case was False => " + caseResult + "\n");
            break;
        default:
            caseResult = "December 25, 0000";
      }

      var myDate = new Date(caseResult);
      res.write("this is my date "+ myDate + " => " + (myDate !== "Invalid Date"));
    if (myDate !== "Invalid Date") {
        res.write("My date said it was not Invalid Date =>" + myDate +"\n" );
        if (caseResult) {  
          var naturaldateformat = monthnames[myDate.getMonth()] + " " + myDate.getDate() + ", " + myDate.getFullYear();
          var z = JSON.stringify({"unix": myDate.getTime(), "natural": naturaldateformat});
          res.end(z);
        } else {
          res.end("Something is wrong here");
        }
    } else {
      res.end(baseJSON);
    }
  } else {
      res.end(baseJSON);
  }
});

server.listen(8080);