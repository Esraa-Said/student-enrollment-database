import mysql from "mysql2/promise"
import env from "dotenv"
import express from "express"

env.config()

const app = express()
const connect = await mysql.createConnection(process.env.DATABASE_URL)

app.get("/teacher", async (req, res) => {
    await connect.query(`
    create table teachers (
        teacher_id int,
        fist_name varchar(50) not null,
        last_name varchar(50) not null,
        email varchar(100),
        constraint teacher_pk primary key(teacher_id)
    );`)
    res.send()
})

app.get("/groups", async (req, res) => {
    await connect.query(`
    create table groups (
        group_id int, 
        group_name varchar(100) not null,
        constraint groups_pk primary key(group_id)
    );`)
    res.send()
})

app.get("/students", async (req, res) => {
	await connect.query(`
    create table students (
        student_id int,
        first_name varchar(100) not null,
        last_name varchar(100) not null,
        group_id int not null references groups(group_id),
        email varchar(100) ,
        phone_number varchar(100),
        constraint students_pk primary key(student_id)
    );`)
	res.send()
})

app.get("/subjects", async (req, res) => {
	await connect.query(`
    create table subjects (
        subject_id int not null,
        subject_name varchar(100) not null,
        group_id int not null references groups(group_id),
        teacher_id int not null references teacher(teacher_id),
        constraint subject_pk primary key(subject_id, group_id)
    );`)
	res.send()
})

app.get("/grades", async (req, res) => {
	await connect.query(`
    create table grades (
        student_id int not null references students(student_id),
        group_id int not null references groups(group_id),
        subject_id int not null references subjects(subject_id),
        grade int not null,
        status varchar(20) not null,
        constraint grades_pk primary key(student_id, group_id, subject_id),
        constraint grades_check_status check (status = 'succeeded' or status = 'failed')
    );`)
	res.send()
})


app.listen(5000, console.log("server listening on port 5000"))