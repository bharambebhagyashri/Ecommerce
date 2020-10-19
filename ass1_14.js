var exp = require('express');

var app = exp();

app.listen(8100, function() {
     console.log("server started on port 8100");
});

app.get('/greet',function(req,res){
     res.send("<h1> Welcome From Web App </h1>");
});

app.all('/*',function(req,res){
      res.send("Invalid URL");	
});