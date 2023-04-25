import fs from "fs/promises"
import mysql from "mysql2/promise"
import env from "dotenv"
import express from "express"

env.config()

const app = express()
const connect = await mysql.createConnection(process.env.DATABASE_URL)
let data
try {
	let res = await fs.readFile("dataset/students.json", "utf8")
	data = JSON.parse(res)
} catch (err) {
	console.log(err)
}
app.get("/", async (req, res) => {
    await connect.query(`INSERT into students values (1,'a','b',1,'ss','s')`)
    res.send()
})

app.get("/seed", async (req, res) => {
	for (let i = 0; i < data.length; i++) {
		const { student_id, first_name, last_name, group_id, email, phone_number } = data[i]
		await connect.query(`INSERT INTO students VALUES (?,?,?,?,?,?)`, [student_id, first_name, last_name, group_id, email, phone_number])
	}
	res.send("seeding successfully completed")
})

app.listen(3030, console.log("server listening on port 3030"))
