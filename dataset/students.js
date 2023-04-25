/**
create table students (
	student_id int,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    group_id int not null references groups (group_id),
    email varchar(100) ,
    phone_number varchar(100),
    constraint students_pk primary key(student_id)
);
 */
import fs from "fs/promises"
import url from "url"
import path from "path"
let first_name = ["Ali", "John", "Ahmed", "Khaled", "Menna", "Esraa", "Samar", "Mostafa", "Asmaa", "Mohamed"],
	last_name = ["Omar", "Hany", "Hatem", "Asem", "Nader", "Mahmoud", "Ahmed", "Adballah", "Said", "Samir"],
	student_id = 1,
	phone_number = ["010", "011", "012", "015"],
	res = []

for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		let student = {}
		student.student_id = student_id
		student.first_name = first_name[i]
		student.last_name = last_name[j]
		student.group_id = (Math.floor(Math.random() * 10) % 4) + 1
		student.email = first_name[i] + last_name[j] + String(student_id) + "@gmail.com"
		student.phone_number = String(phone_number[Math.floor(Math.random() * 10) % 4]) + String(Math.floor(Math.random() * 1e8))
		res.push(student)
		student_id++
	}
}

try {
	await fs.writeFile("dataset/students.json", JSON.stringify(res), "utf-8")
    console.log(res)
	console.log("generation complete")
} catch (err) {
	console.log(err) 
}

