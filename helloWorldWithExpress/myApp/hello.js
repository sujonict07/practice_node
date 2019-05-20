const express = require('express');

const app = express();
const port = 3000;

app.get('/',function(request, response){
	response.send("Hello world!!");
});

app.listen(port, function(request, response){
	console.log("Server listing on http://localhost:/%s",port);
});


