var exp = require('express');

var app = exp();

app.use(exp.static('images'));

app.set('view engine','pug');
app.set('views','./views');

app.get('/first',function(req,res){
      res.render('first');    //first.pug in views folder
});


app.listen(8100,function(req,res){
    console.log("server started on 8100");
});