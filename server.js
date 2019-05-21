const express = require("express");
let app = express();
let http = require('http');
let WebSocket = require('ws');
let server = http.createServer(app);
let wss = new WebSocket.Server({server});
app.use(express.static(__dirname));

//白名单
let whiteList = ['']

app.all('*', function(req, res, next) {
    if (req.method == "OPTIONS") {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,BLOG_TOKEN");
      res.send();
    }else{
      next();
    }
});

let hostName = 'localhost';
let port = 1234;

server.listen(port,function(){
  console.log(`服务器运行在http://${hostName}:${port}`);
});
module.exports = {
  app,
  wss
};
const users = require('./port/socket.js');


//测试使用 supervisor (npm install -g supervisor) 启动server.js
