let http = require('http');
let ws = new require('../WebSocket/node_modules/ws');

let wss = new ws.Server({noServer:true});
let clients = new Set();

http.createServer(function(req, res){
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
}).listen(5000);

function onSocketConnect(ws){
    clients.add(ws);
    ws.on('message', function(message){
        message = message.slice(0, 50);
        for(let client of clients) {
            client.send(message);
        }
    });

    ws.on('close', function(){
        clients.delete(ws);
    });
}