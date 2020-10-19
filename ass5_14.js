var exp = require('express');

var app = exp();

app.all('/*', function(req,res){
    res.send("<h1>Invalid request</h1>");
});

app.listen(9000);
 console.log("server srted at 9000");