const express = require('express')
const app = express()

// const cors = require('cors')
// app.use(cors())
// app.use(express.urlencoded({ extended: false }))


const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({//磁盘存储引擎
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/'))//此处第二个参数为存放文件的路径
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)//此处第二个参数为文件名
    }
})
const upload = multer({ storage: storage })
app.post('/api', upload.single('filename'), (req, res) => {
    //req.body存放文本域数据
    //req.file存放文件数据
    res.send('12')
})

app.listen(80, () => {
    console.log("success!");
})