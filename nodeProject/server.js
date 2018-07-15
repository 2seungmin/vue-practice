const jquery = require('jquery')
const ejs = require('ejs')
const app = require('express')()
const session = require('express-session')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.listen('3000', function () {
	console.log('3000포트에서 열림ㅋㅋ')
})

const router = require('./router/router.js')(app, fs)