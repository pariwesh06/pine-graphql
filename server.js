const express = require('express');  //import
const bodyParser = require('body-parser')  //middleware
const app = express();
app.use(bodyParser.json());
const users = [];
app.get('/', function(request, response){
   response.send(request.headers['accept']);
    // response.send(request.query);
});
app.post('/users', function(request, response){
    users.push(request.body);
    response.send(request.body);
    // response.send(request.query);
});
app.get('/users', function(request, response){
   response.send(users)
 });
 app.put('/users', function(request, response){
  //  ??
    response.send(users)
  });
app.listen(3000, function(){
    console.log('server started at 3000');
})
    // for(;;){}