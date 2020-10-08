var http = require('http');
var fs = require('fs');
var formidable = require('../node_modules/formidable');
var qs = require('querystring');


http.createServer(function(req, res){
    console.log('connected to server')
    console.log(req.headers);
    let form = new formidable.IncomingForm();
    if(req.url == '/uploadform'){
        res.writeHead(200);
        res.write(fs.readFileSync('main.html'));
        return res.end();
    }else if(req.url == '/fileupload'){
        // processPost(req, res, function(){
        //     console.log(req.post);
        //     res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
        //     res.end();
        // });
        //handle base64String
    }else{
        res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
        res.end();
    }
}).listen(3002);

// function processPost(req, res, callback){
//     var queryData = "";
//     if(req.method == 'POST'){
//         req.on('data', function(data){
//             queryData += data;
//         });
//         req.on('end', function(){
//             console.log(queryData);
//             req.post = qs.parse(queryData);
//             callback();
//         });
//     }else{
//         res.writeHead(405, {'Content-Type': 'text/plain'});
//         res.end();
//     }
// }