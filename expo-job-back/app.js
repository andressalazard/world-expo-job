var express = require('express');
var app = express();

PORT = 3030;

app.get('/', (req, res)=>{
  res.send('Hello world!');

});

app.listen(PORT, ()=>{

  console.log(`Example app listening on port ${PORT}!`);
})
