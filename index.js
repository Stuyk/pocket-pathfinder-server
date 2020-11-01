const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

function sendData(ws, route, object) {
    ws.send(JSON.stringify({ route, ...object }));
}

wss.on('connection', (ws) => {
    sendData(ws, 'navigate', { data: '/about' });

    ws.on('message', (msg) => {
        console.log(msg);
    });
});

app.get('/', (req, res) => {
    res.send(`Hello World!`);
});

server.listen(3000, () => {
    console.log(`Listening on port http://localhost:3000`);
});
