require("dotenv").config({
    path: "variables.env"
});

const express = require("express");
const mail = require("./mail");

const app = express();

app.use(express.static("dist"));
app.use(express.json({ limit: "4kb" }));
app.post("/send", mail.sendMessage);
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}!`));
