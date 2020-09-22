var http = require('http');
var User = require('./sharedModule.js')

http.createServer(function(req, res){
    
    if(req.url === "/admin"){
        let admin = new User("admin", "admin123");
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(admin.info());
        res.end();
    }
    
}).listen(3001);