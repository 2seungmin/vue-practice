const mysql = require('mysql');
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'vue'
})

db.connect()

module.exports = (app, fs) => {

	app.post('/member/join', (req, res) => {
		const id = req.body.id
		const pw = req.body.pw
		const name = req.body.name
		const chk = "SELECT * FROM member where id=?"
		const sql = "INSERT INTO member SET id=?,pw=?,name=?"
		db.query(chk, [id], (err, results) => {
			if (!results[0]) {
				db.query(sql, [id, pw, name])
				res.send("true")
			} else {
				res.send("false")
			}
		})
	})

	app.post('/member/login', (req, res) => {
		const id = req.body.id
		const pw = req.body.pw
		const sql = "SELECT * FROM member where id=? and pw=?"
		db.query(sql, [id, pw], (err, results) => {
			if (!results[0]) {
				res.json("false")
			} else {
				res.json(results[0])
			}
		})
	})

}