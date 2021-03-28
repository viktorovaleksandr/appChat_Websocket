const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const port = 7777;

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
   ws.on('message', function incoming(json) {
      console.log(json)
      const event = JSON.parse(json);
      switch (event.type) {
         case 'SEND_MESSAGE': {
            wss.clients.forEach(function each(client) {
               if (client.readyState === WebSocket.OPEN) {
                  client.send(json);
               }
            });
         }
      }
   })
   ws.on('close', function close() {
      console.log('disconnected');
   });
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})