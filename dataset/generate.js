import { group } from "console";
import fs from "fs/promises";

let first_name = ["Ali", "John", "Ahmed", "Khaled", "Menna", "Esraa", "Samar", "Mostafa", "Asmaa", "Mohamed"],
	last_name = ["Omar", "Hany", "Hatem", "Asem", "Nader", "Mahmoud", "Ahmed", "Adballah", "Said", "Samir"],
	phone_number = ["010", "011", "012", "015"],
	id = 1,
	res = [],
	gr = [],
	group_name = ["1st Communication", "2nd Communication", "3rd Computer Sience", "4th Computer Sience"],
	subject_name = [
		"Engineering Fundamentals",
		"Electronic Circuits 1",
		"Civil Enginerring",
		"Math 1",
		"Programming 1",
		"Electronic Circuits 2",
		"Electronics 1",
		"Math 2",
		"Lab 1",
		"Technical Language",
		"Commputer Applications",
		"Commputer Organizations",
		"Math 3",
		"Measurements",
		"Project Management",
		"OOP",
		"Electronic Fundamentals",
		"Electronics 2",
		"Logic Circuits",
		"Signal Analysis",
		"Technical Reports",
		"Tests",
		"Math 4",
		"Control",
		"Ethics",
		"Operating Systems",
		"System Analysis",
		"Microprocessors",
		"Data Structures",
		"Control",
		"Algorithms",
		"Database",
		"Machine",
		"Architecture",
		"Electronics 3",
		"Tests 2",
		"AI",
		"Graphics",
		"Image Processing",
		"Network",
		"NN",
		"Compiler",
		"Robotics",
		"Security",
		"Tests 3",
	];

// students data
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		let student = {};
		let grades = {};
		student.student_id = id;
		student.first_name = first_name[i];
		student.last_name = last_name[j];
		student.group_id = (Math.floor(Math.random() * 10) % 4) + 1;
		student.email = first_name[i] + last_name[j] + String(id) + "@gmail.com";
		student.phone_number = String(phone_number[Math.floor(Math.random() * 10) % 4]) + String(Math.floor(Math.random() * 1e8));
		res.push(student);
		grades.student_id = id;
		grades.group_id = student.group_id;
		gr.push(grades);
		id++;
	}
}

try {
	await fs.writeFile("dataset/students.json", JSON.stringify(res), "utf-8");
} catch (err) {
	console.log(err);
}

// teachers data
(id = 1), (res = []);
for (let i = 0; i < 10; i++) {
	let teacher = {};
	teacher.teacher_id = id;
	teacher.first_name = first_name[i];
	teacher.last_name = last_name[i];
	teacher.email = first_name[i] + last_name[i] + String(id) + "@gmail.com";
	res.push(teacher);
	id++;
}

try {
	fs.writeFile("dataset/teachers.json", JSON.stringify(res), "utf-8");
} catch (err) {
	console.log(err);
}

// grades data
res = [];
gr.forEach((ele) => {
	let s = 13 - 3 * (ele.group_id == 4);
	for (let i = 1; i < s; ++i) {
		let { student_id, group_id } = ele;
		let student = {};
		student.student_id = student_id;
		student.group_id = group_id;
		student.subject_id = i + (group_id - 1) * 12;
		student.grade = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
		student.status = student.grade < 50 ? "failed" : "succeeded";
		res.push(student);
	}
});

try {
	fs.writeFile("dataset/grades.json", JSON.stringify(res), "utf-8");
} catch (err) {
	console.log(err);
}

//groups data
res = [];
for (let i = 0; i < group_name.length; i++) {
	let group = {};
	group.group_id = i + 1;
	group.group_name = group_name[i];
	res.push(group);
}

try {
	fs.writeFile("dataset/groups.json", JSON.stringify(res), "utf-8");
} catch (err) {
	console.log(err);
}

//subjects data
res = [];
let group_id = 0;
for (let i = 0, j = 0; i < subject_name.length; i++, j = (j + 1) % 12) {
	if (j == 0) group_id++;
	let subject = {};
	subject.subject_id = i + 1;
	subject.subject_name = subject_name[i];
	subject.group_id = group_id;
	subject.teacher_id = Math.floor(Math.random() * 10 + 1);
	res.push(subject);
}

try {
	fs.writeFile("dataset/subjects.json", JSON.stringify(res), "utf-8");
} catch (err) {
	console.log(err);
}