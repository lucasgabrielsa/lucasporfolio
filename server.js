var express = require('express');
var app = express();
var port = 8181;
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.get('/home', function(req, res) {
    res.render('index');
});

app.listen(port, function() {
    console.log('Server running on port:' + port);
});