var express = require ('express');
var chalk   = require ('chalk');
var debug   = require ('debug')('maintainerServer');
var morgan  = require ('morgan');


var app = express ();


app.set ('views', __dirname +'/maintenance-tracker-App');

app.get('/', function(req,res){
    res.send ('Hello from the maintainer App');
})


app.get ('/', function (req, res){
    res.send ('Hello from the maintainer App');
})

app.listen (3000, function (){
    console.log('listening on port ' + chalk.green(3000));
})