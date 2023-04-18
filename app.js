// main file 

import express from "express"
import {connectDB} from "./db/connect.js"
import {router} from './routes/appRoutes.js'
const app = express()

app.get("/", (req, res) => {
	res.send(`
        <h1>student enrollment </h1>
    `)
})


app.use("/api",router)

app.listen(3000, console.log(`server listening on port 3000.........`))
