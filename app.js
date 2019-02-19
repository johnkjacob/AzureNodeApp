var express = require('express');
var app = express();

const port=process.env.PORT || 80;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
   res.sendFile('index.html', {root: __dirname })
})

app.post('/', function(req, res) {
    var data = JSON.stringify(req.body);
    res.send("Your comment is recorded :)");
});

var server = app.listen(port, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port)
})