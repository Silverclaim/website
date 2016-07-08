var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

app.get('/ping', function (req,res) {
  res.send("good to go!");
});

app.get('/', function(req,res) {
  res.render('index');
});

app.set('view engine', 'ejs');