var express = require('express');
var app = express();
app.get('/', function(req, res){
 res.send("Hello world! by express");
}); 
app.get('/test', function(req, res){
    res.send("this is route 2");
});
var knockknock = require('knock-knock-jokes');
app.get('/joke', function(req, res){
    res.send("this is route 3");
   });


app.listen(8080); 



