try{
  var express = require('express');
  var bodyParser = require('body-parser');
  var cors = require('cors');

}catch(error){
  console.error("ERROR are all the Dependencies installed?");
  console.log(error);
  process.exit(1);
}

// Config
var port = 3001;


var app = express(); // Define our app

app.use(cors())
;
// Configure app to use bodyParser()
// This will let us get data from a POST
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var sign_s3 = require('./controllers/sign_s3');

app.use('/sign_s3', sign_s3.sign_s3);

app.listen(port);

console.log("Server Started make a request to localhost:" + port )
