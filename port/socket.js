const server = require('../server');


server.wss.on('connection', function connection(ws) {
  console.log('链接成功！');
  ws.on('message', function incoming(data) {
    /**
     * 把消息发送到所有的客户端
     * wss.clients获取所有链接的客户端
     */
    server.wss.clients.forEach(function each(client) {
      client.send(data);
    });
  });
});

server.app.get('/',(res,req) => {
  console.log('可用')
})


function handleMySql(fn){
  let db = mysql.createConnection(server.sqlCont);
  db.connect(function(error){
    if(error){
      console.log(error);
    }else{
      console.log('已连接数据库');
      if( fn ) {
        fn(db);
      }else {
        throw new Error("invalid parameter fn , parameter fn must be callback!!");
      }
    }
  });
}



module.exports = server;
