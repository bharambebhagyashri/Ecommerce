var exp = require('express');

var app = exp();

app.listen(8100,function(){
     console.log("server srted at 8100");
});

app.get('/login/:username/:pass',function(req,res){
	   var user=req.params.username;
	   var pass=req.params.pass;
	
      if(user == 'object' && pass== 'knowit' )
	  {
          res.send("login sucessfully");
	  }
	   else
	   {
            res.send("Invalid user id and password"	);
	   }			
});

app.all('/*',function(req,res){
      res.send("Invalid URL");	
});