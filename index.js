const express = require('express')
const path = require('path')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.set('views', path.join(__dirname, 'views'))// 设置存放模板文件的目录
app.set('view engine', 'ejs')// 设置模板引擎为 ejs

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3002)

console.log("server start in localhost:3002")