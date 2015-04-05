var mimimi = require('mime');
var http = require('http');
var fs = require('fs');
var port = 3000;
var imgPath = './public/img/i.jpg';

var server = http.createServer(function (req, resp) {

	if(req.url == '/i.jpg'){

		fs.readFile(imgPath, function(err, res){

			if(err){
				resp.end('Something definetely goes wrong!');
				console.log(err);
			} else {
				console.log(mimimi.lookup(imgPath));
				resp.writeHead(200, {'Content-Type': mimimi.lookup(imgPath)});
				resp.end(res);
			}

		});

	} else {
		resp.writeHead(200, {'Content-Type': 'text/plain'});
		resp.end('The only thing this cute website can is send you an image by loading  /i.jpg path :)');
	}
});

server.listen(3000, function() {
	console.log("Listenening 127.0.0.1:%d", port);
});

