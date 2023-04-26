import fs from "fs/promises";
import mysql from "mysql2/promise";
import env from "dotenv";
import express from "express";

env.config();

const app = express();
const connect = await mysql.createConnection(process.env.DATABASE_URL);

let dataStudents, dataGrades, dataTeachers;

try {
	let res = await fs.readFile("dataset/students.json", "utf8");
	dataStudents = JSON.parse(res);
	res = await fs.readFile("dataset/grades.json", "utf8");
	dataGrades = JSON.parse(res);
	res = await fs.readFile("dataset/teachers.json", "utf8");
	dataTeachers = JSON.parse(res);
} catch (err) {
	console.log(err);
}

app.get('/', async (req, res) => {
	// await connect.query(`INSERT into students values (1,'a','b',1,'ss','s')`)
	res.send();
});

app.get('/seedStudents', async (req, res) => {
	for (let i = 0; i < dataStudents.length; i++) {
		const { student_id, first_name, last_name, group_id, email, phone_number } = dataStudents[i];
		await connect.query(`INSERT INTO students VALUES (?,?,?,?,?,?)`, [student_id, first_name, last_name, group_id, email, phone_number]);
	}
	res.send("seeding successfully completed");
});

app.get("/seedGrades", (req, res) => {
	dataGrades.forEach(record => {
		connect.query(`INSERT INTO grades VALUES (?, ?, ?, ?, ?)`, [record.student_id, record.group_id, record.subject_id, record.grade, record.status]);
	});
	res.send();
});

app.get("/seedTeacher", (req, res) => {
	dataTeachers.forEach(record => {
		connect.query(`INSERT INTO teacher VALUES (?, ?, ?, ?)`, [record.teacher_id, record.first_name, record.last_name, record.email]);
	});
	res.send();
});

app.listen(3000, console.log("server listening on port 3030"));
