import mysql from "mysql2/promise"
import env from "dotenv"
import express from "express"
const app = express()

env.config()

console.log(process.env.DATABASE_URL)
const connect = await mysql.createConnection(process.env.DATABASE_URL)

app.get("/teacher", async (req, res) => {
	await connect.query(`create table teacher (
    teacher_id int,
    fist_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(100),
    constraint teacher_pk primary key (teacher_id)
    );`)
	res.send()
})

app.get('/groups', async (req, res) => {
    res.send()
})



app.listen(5000, console.log("server listening on port 5000"))
