
let http= require('http');
let date= require('./myfirstmodule');

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.write("Date and Time :"+date.myDateTime());
}).listen(3000);
