const express = require('express');
const app = express();
const port = 5555

app.use(express.static('dist/'))

var server = app.listen(port, () => {
    var host = server.address().address
    var port = server.address().port
    console.log(`==> 服务器开始运行，端口为 ${host}:${port}`)
  })