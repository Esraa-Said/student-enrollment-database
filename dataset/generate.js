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

let first_name = ["Ali", "John", "Ahmed", "Khaled", "Menna", "Esraa", "Samar", "Mostafa", "Asmaa", "Mohamed"],
	last_name = ["Omar", "Hany", "Hatem", "Asem", "Nader", "Mahmoud", "Ahmed", "Adballah", "Said", "Samir"],
	phone_number = ["010", "011", "012", "015"],
	id = 1,
	res = [],
	gr = []

// students data
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		let student = {}
		let grades = {}
		student.student_id = id
		student.first_name = first_name[i]
		student.last_name = last_name[j]
		student.group_id = (Math.floor(Math.random() * 10) % 4) + 1
		student.email = first_name[i] + last_name[j] + String(id) + "@gmail.com"
		student.phone_number = String(phone_number[Math.floor(Math.random() * 10) % 4]) + String(Math.floor(Math.random() * 1e8))
		res.push(student)
		grades.student_id = id
		grades.group_id = student.group_id
		gr.push(grades)
		id++
	}
}

try {
	await fs.writeFile("dataset/students.json", JSON.stringify(res), "utf-8")
    // console.log(res)
	// console.log("generation complete")
} catch (err) {
	console.log(err) 
}

// teachers data
id = 1, res = [];
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		let teacher = {};
		teacher.teacher_id = id;
		teacher.first_name = first_name[i];
		teacher.last_name = last_name[j];
		teacher.email = first_name[i] + last_name[j] + String(id) + "@gmail.com";
		res.push(teacher);
		id++;
	}
}

try {
	fs.writeFile("dataset/teachers.json", JSON.stringify(res), "utf-8");
} catch (err) {
	console.log(err) 
}

// grades data
res = [];
gr.forEach(ele => {
	ele.subject_id = Math.floor(Math.random() * 6) + 1;
	ele.grade = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
	ele.status = (ele.grade < 50)? "failed": "succeeded";
	res.push(ele);
});

try {
	fs.writeFile("dataset/grades.json", JSON.stringify(res), "utf-8");
} catch (err) {
	console.log(err) 
}