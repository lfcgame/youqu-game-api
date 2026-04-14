const express = require('express')
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
  res.send('柚趣互娱 API 运行正常')
})

app.listen(PORT, () => {
  console.log(`服务启动在端口 ${PORT}`)
})
