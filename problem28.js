var express = require('express');
var app = express();

app.get('/intro', function(req,res) {
    res.send('hi there! <br> im ajit. how are uh?');
});


app.listen(5000 , () => {
    console.log('server has started');

});