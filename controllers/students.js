/*
this file will be used to add functionalty 
like function to add , create ,delete , ... student 
*/

import { db } from "../db/connect.js"
import { StatusCodes } from "http-status-codes"

export const getAllStudents = async (req, res) => {
	const [data] = await db.query(`select * from students`)
	res.status(200).json({ data, length: data.length })
}

export const createStudent = async (req, res) => {
	const { student_id, first_name, last_name, group_id, email, phone_number } = req.body
	let val
	try {
		val = await db.query(`INSERT INTO students VALUES (?,?,?,?,?,?)`, [student_id, first_name, last_name, group_id, email, phone_number])
	} catch (err) {
		return res.json({ msg: "error in creating student.please, check data validation and try again" })
	}
	res.status(StatusCodes.CREATED).json(req.body)
}

export const updateStudent = async (req, res, next) => {
	// in front we must handle not to update id
	// there is a feild for each data => if filled and validatied then apply
	const student_id = Number(req.params.id)
	const { first_name, last_name, group_id, email, phone_number } = req.body
	const updateObj = {}
	if (first_name) updateObj.first_name = first_name
	if (last_name) updateObj.last_name = last_name
	if (group_id) updateObj.group_id = group_id
	if (email) updateObj.email = email
	if (phone_number) updateObj.phone_number = phone_number

	for (let [k, v] of Object.entries(updateObj)) {
		await db.query(`UPDATE students SET ${k} = ? WHERE student_id = ? `, [v, student_id])
	}
	const [result] = await db.query(`SELECT * FROM students WHERE student_id = ?`, student_id)
	if (!result.length) {
		return res.status(StatusCodes.BAD_REQUEST).json({ msg: `no student found with id ${student_id}` })
	}
	res.status(StatusCodes.OK).send(result)
}

export const deleteStudent = async (req, res) => {
	const student_id = req.params.id
	const [result] = await db.query(`SELECT * FROM students WHERE student_id = ?`, student_id)
	if (!result.length) {
		return res.status(StatusCodes.BAD_REQUEST).json({ msg: `no found student with id ${student_id}` })
	}
	await db.query(`DELETE FROM students WHERE student_id = ?`, student_id)
	res.status(StatusCodes.OK).json(result)
}

export const updateGrade = async (req, res) => {
	const { gid: group_id, sid: student_id, bid: subject_id } = req.params
	const { grade } = req.body
	let status = grade >= 50 ? "succeeded" : "failed"
	try {
	} catch (err) {
		let result = await db.query(`UPDATE grades SET grade = (?) , status = (?)  WHERE student_id = ? AND group_id = ? AND subject_id = ?`, [
			grade,
			status,
			Number(student_id),
			Number(group_id),
			Number(subject_id),
		])
		return res.status(StatusCodes.BAD_REQUEST).json({ msg: `grade updatation failed` })
	}
	res.json({ msg: `updatation is successfully done` })
}