var exp = require('express');
var bodyParser = require('body-parser');


var app = exp();
app.use(bodyParser.urlencoded({'extended':false}));


app.get('/login.html',function(req,res){
     res.sendFile(__dirname+"/login.html");
});

app.post('/logincheck',function(req,res){
     if(req.body.uid == "bakul" && req.body.pwd == "bakul123")
     {
         res.send("Succesful login");
         
     }
     else
	 res.send("Failed login");
});



app.listen(8100, function(req,res){
    console.log('server started at 8100');
});