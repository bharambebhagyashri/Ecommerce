var exp = require('express');

var app = exp();

app.use(exp.static('images'));

app.set('view engine','pug');
app.set('views','./views');

app.get('/dynamic/:nm',function(req,res){
      var nm = req.params.nm;
      res.render('first1',{'name': nm });  //data sent to pug to make it dynamic
});

app.listen(8100,function(req,res){
    console.log("server started on 8100");
});