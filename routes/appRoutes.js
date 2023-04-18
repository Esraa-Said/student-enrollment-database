/**
 * 
 * handling used routes
 */

import express from "express"
import { getAllStudents } from "../controllers/students.js"


export const router = express.Router()

router.route("/students").get(getAllStudents)