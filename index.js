const express = require('express')
const app = express()
const PORT = 8000  // 必须 8000

// 重点：前面必须加 /api
app.get('/api', (req, res) => {
  res.send('柚趣互娱 API 运行正常')
})

app.listen(PORT, () => {
  console.log('服务启动')
})
