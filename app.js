var express = require('express');
var app = express();

const port=process.env.PORT || 80;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile('index.html', {root: __dirname })
})

app.post('/', function(req, res) {
    var data = JSON.stringify(req.body);
    res.send("Your comment is recorded :)");
});

app.post('/filterpage', function(req, res) {
    var mild = req.query.mild;
	var strong = req.query.strong;
	var veryStrong = req.query.verystrong;
	var message = ' Your comment have '+mild+' mild words, '+strong+' strong words and '+veryStrong + ' very strong words';
    res.send(message);
});

var server = app.listen(port, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port)
})