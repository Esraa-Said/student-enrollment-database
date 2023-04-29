// handling used routes

import express from "express";
import { getAllStudents, createStudent, updateStudent, deleteStudent, updateGrade, getStudentById } from "../controllers/students.js"
import * as group from '../controllers/groups.js';

export const router = express.Router();

router.route("/students").get(getAllStudents).post(createStudent);
router.route("/student/:id").delete(deleteStudent).patch(updateStudent).get(getStudentById)
router.route("/group/:gid/students/:sid/subjects/:bid").patch(updateGrade)



router.get('/group/:id/students', group.groupStudentsAllData);
router.get('/group/:id/subjects', group.groupSubjects);
router.get('/group/:id/students/info', group.groupStudentsPersonalInfo);
router.get('/group/:id/students/grades', group.groupStudentsGrades);
router.get('/group/:gid/students/:sid', group.studentAllData);
