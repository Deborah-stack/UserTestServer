const http = require("http");

const server = http.createServer(function(request, response) {
  console.log(request.url)
  response.write("Hi! I'm Deborah Ayomide Oyerinde.");
  
  response.write("I'm 23 years old and in the Backend Development Track.");
  response.end();
});

server.listen(8080);

