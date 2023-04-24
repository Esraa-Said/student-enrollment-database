import mysql from "mysql2/promise"
import env from "dotenv"
import express from "express"

env.config()

const app = express()
const connect = await mysql.createConnection(process.env.DATABASE_URL)

app.get("/teacher", async (req, res) => {
    await connect.query(`
    CREATE TABLE teacher (
        teacher_id INT,
        fist_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(100),
        CONSTRAINT teacher_pk PRIMARY KEY(teacher_id)
    )`)
    res.send()
})

app.get("/students", async (req, res) => {
	await connect.query(`
    CREATE TABLE students (
        student_id INT,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        group_id INT NOT NULL,
        email VARCHAR(100) ,
        phone_number VARCHAR(100),
        CONSTRAINT students_pk PRIMARY KEY(student_id)
        CONSTRAINT students_fk FOREIGN KEY(group_id) REFERENCES Groups_(group_id)
    )`)
	res.send()
})

app.get("/grades", async (req, res) => {
	await connect.query(`
    CREATE TABLE grades (
        student_id INT NOT NULL,
        group_id INT NOT NULL,
        subject_id INT NOT NULL,
        grade INT NOT NULL,
        status VARCHAR(20) CHECK(status IN ('succedded','faild')),
        CONSTRAINT grades_pk PRIMARY KEY(student_id, group_id, subject_id)
    )`)
	res.send()
})

app.get('/groups', async (req, res) => {
    res.send()
})



app.listen(5000, console.log("server listening on port 5000"))
