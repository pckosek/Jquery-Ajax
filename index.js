#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express')
var app = express();

var hbs = require('hbs');
app.set('view engine', 'hbs');

var count = 0;

// -------------- routes -------------- //

app.get('/', function(req,res){
    res.redirect('./jquery_101')
})

app.get('/jquery_101', function(req,res){
    res.render('./jquery_101')
})

app.get('/ajax_101', function(req,res){
    res.render('./ajax_101')
})

app.get('/ajax_worker', function(req,res){
    
    count++;
    
    var obj = {
        'status': 'ok',
        'count' : count
    }
    
    res.json(obj)
})



// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});
