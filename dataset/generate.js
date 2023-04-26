import { group } from "console"
import fs from "fs/promises"

let first_name = ["Ali", "John", "Ahmed", "Khaled", "Menna", "Esraa", "Samar", "Mostafa", "Asmaa", "Mohamed"],
	last_name = ["Omar", "Hany", "Hatem", "Asem", "Nader", "Mahmoud", "Ahmed", "Adballah", "Said", "Samir"],
	phone_number = ["010", "011", "012", "015"],
	id = 1,
	res = [],
	gr = [],
	group_name = ["1st communication", "2nd communication", "3rd computer sience", "4th computer sience"],
	subject_name = [
		"Engineering fundamentals",
		"Electronic curcits 1",
		"cevil enginerring",
		"Math 1",
		"programming 1",
		"Electronic curcits 2",
		"Electronics 1",
		"Math 2",
		"Lab 1",
		"Technical language",
		"commputer applications",
		"commputer organizations",
		"Math 3",
		"measurements",
		"project Managments",
		"OOP",
		"Electronic fundamentals",
		"Electronics 2",
		"logic circuits",
		"sginal anlaysis",
		"technical reports",
		"Tests",
		"Math 4",
		"control",
		"Ethics ",
		"OPerating systems",
		"system analysis",
		"microprocessors",
		"data structures",
		"control",
		"algorithms",
		"database",
		"machine",
		"architecture",
		"electronics 3",
		"tests 2",
		"Ai",
		"graphics",
		"image processing",
		"network",
		"NN",
		"compiler",
		"Robotics",
		"security",
		"Tests 3",
	]

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
	// await fs.writeFile("dataset/students.json", JSON.stringify(res), "utf-8")
	// console.log(res)
	// console.log("generation complete")
} catch (err) {
	console.log(err)
}

// teachers data
;(id = 1), (res = [])
for (let i = 0; i < 10; i++) {
	let teacher = {}
	teacher.teacher_id = id
	teacher.first_name = first_name[i]
	teacher.last_name = last_name[i]
	teacher.email = first_name[i] + last_name[i] + String(id) + "@gmail.com"
	res.push(teacher)
	id++
}
console.log(res)
try {
	fs.writeFile("dataset/teachers.json", JSON.stringify(res), "utf-8")
} catch (err) {
	console.log(err)
}

// grades data
res = []

gr.forEach((ele) => {
	for (let i = 1; i < 7; ++i) {
		let { student_id, group_id } = ele
		let student = {}
		student.student_id = student_id
		student.group_id = group_id
		student.subject_id = i
		student.grade = Math.floor(Math.random() * (100 - 40 + 1)) + 40
		student.status = student.grade < 50 ? "failed" : "succeeded"
		res.push(student)
	}
})

try {
	// fs.writeFile("dataset/grades.json", JSON.stringify(res), "utf-8")
} catch (err) {
	console.log(err)
}

//groups data
res = []
for (let i = 0; i < group_name.length; i++) {
	let group = {}
	group.group_id = i + 1
	group.group_name = group_name[i]
	res.push(group)
}

try {
	// fs.writeFile("dataset/groups.json", JSON.stringify(res), "utf-8")
} catch (err) {
	console.log(err)
}

//subjects data

res = []
let group_id = 0
for (let i = 0, j = 0; i < subject_name.length; i++, j = (j + 1) % 12) {
	if (j == 0) group_id++
	let subject = {}
	subject.subject_id = i + 1
	subject.subject_name = subject_name[i]
	subject.group_id = group_id
	subject.teacher_id = Math.floor(Math.random() * 10 + 1)
	res.push(subject)
}

try {
	// fs.writeFile("dataset/subjects.json", JSON.stringify(res), "utf-8")
} catch (err) {
	console.log(err)
}
// console.log(res)
