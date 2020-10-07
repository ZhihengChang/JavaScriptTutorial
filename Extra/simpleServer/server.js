var http = require('http');
var fs = require('fs');
var formidable = require('formidable');


http.createServer(function(req, res){
    console.log('connected to server')
    if(req.url == '/uploadform'){
        res.writeHead(200);
        res.write(fs.readFileSync('main.html'));
        return res.end();
    }else if(req.url == '/fileupload'){
        console.log("waiting for file");
        res.writeHead(200);
        res.write("Recieved");
        let form = new formidable.IncomingForm();
        form.parse(req).on('file', function(name, file){
            console.log('got file: ', name);
        })
        return res.end();
    }
}).listen(3002);