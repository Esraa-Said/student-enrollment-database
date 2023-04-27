// main file 

import express from "express";
import { router } from "./routes/appRoutes.js";
import env from "dotenv";
import { notFound } from "./middleware/not-found.js";
import cors from "cors"
env.config();

const app = express();
const Port = process.env.PORT || 5000;

app.use(cors({ origin: "http://127.0.0.1:5500" }))

app.get('/', (req, res) => {
	res.send(`<h1>student enrollment </h1>`);
});

app.get('/group/:id', (req, res) => {
	// two options page (students or subjects)
	res.send();
});

app.use(express.json());
app.use("/api", router);
app.use(notFound);

app.listen(3000, console.log(`server listening on port ${Port}.........`));