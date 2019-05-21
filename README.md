# Node websocket

###项目结构

| 文件夹 | 文件 | 描述 |
| :------: | :------: | :------: |
| / | server.js | 项目入口文件，包含端口、接口白名单，数据库信息等 |
| port | socket.js | websocket相关 |

###项目说明
- 原定服务端使用socket.io来搭建，保持通信，但前端部分使用websocket,websocket与socket.io通信要求：websocket不能低于13,所以使用wss保持通信

###项目命令
- cd node_websocket
- npm install/yarn install
- npm install -g supervisor (测试开发时使用，守护node进程;)
- node/yarn server.js/supervisor server.js
