/*
this file is for connecting to database

*/

import mysql from "mysql2/promise"
import env from "dotenv"
env.config()

export const connectDB = async () => {
	return await mysql.createConnection(process.env.DATABASE_URL)
}