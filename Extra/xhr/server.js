let http = require('http');
let fs = require('fs');
let formidable = require('../xhr/node_modules/formidable');

http.createServer(function(req, res){
    console.log('connect to server')
    console.log(req.url);
    if(req.url == '/submit'){
        console.log('got POST request');
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            if(err){
                console.error(err.message);
                return;
            }
            let oldpath = files.filetoupload.path;
            let newpath = '../xhr/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function(err){
                if(err) throw err;
                res.writeHead('File uploaded and moved');
                res.end();
            });
            
        });
    }else{
        res.writeHead(200);
        res.write(fs.readFileSync('index.html'));
        return res.end();
    }
}).listen(3000)