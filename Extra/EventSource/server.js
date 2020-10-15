let http = require('http');
let fs = require('fs');

function onDigits(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache'
    });

    let i = 0;
    let timer = setInterval(write, 1000);
    write();

    function write() {
        i++;
        if (i == 5) {
            res.write('event: bye\ndata: bye-bye\n\n');
            clearInterval(timer);
            res.end();
            return;
        }
        res.write('data: ' + i + '\n\n');
    }
}

http.createServer(function(req, res){
    if (req.url == '/digits') {
        onDigits(req, res);
        return;
    }else{
        res.writeHead(200);
        res.write(fs.readFileSync('index.html'));
        return res.end();
    }
}).listen(8080);

