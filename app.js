// main file 

import express from "express"
import {connectDB} from "./db/connect.js"
import {router} from './routes/appRoutes.js'
import env from "dotenv"
env.config()
const app = express()
const Port = process.env.PORT || 5000

app.get("/", (req, res) => {
	res.send(`
        <h1>student enrollment </h1>
    `)
})

app.use("/api", router)
const start = async () => {
	try {
		await connectDB()
		app.listen(Port, console.log(`server listening on port ${Port}.........`))
	} catch (err) {
		console.log(`can't connect to database`)
	}
}

start()
