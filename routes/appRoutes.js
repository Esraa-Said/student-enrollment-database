/**
 * 
 * handling used routes
 */

import express from "express"
import { getAllStudents, createStudent, updateStudent, deleteStudent, updateGrade } from "../controllers/students.js"

export const router = express.Router()

router.route("/students").get(getAllStudents).post(createStudent)

router.route("/student/:id").delete(deleteStudent).patch(updateStudent)
router.route("/grades").patch(updateGrade)

