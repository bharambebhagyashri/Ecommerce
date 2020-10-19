var exp = require('express');

var app = exp();

app.get('/login',function(req,res){
     
       var user=req.query.userid;
	   var pass=req.query.pass;
	
      if(user == 'object' && pass== 'knowit' )
	  {
          res.send("login sucessfully");
	  }
	   else
	   {
            res.send("Invalid user id and password"	);
	   }			
});

app.listen(9000);
 console.log("server srted at 9000");
 
app.all('/*',function(req,res){
      res.send("Invalid URL");	
});