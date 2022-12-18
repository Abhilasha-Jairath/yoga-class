const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const app = express();
mongoose.set("strictQuery", true);

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose
    .connect(DB, {
        useNewUrlParser: true,

        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log("No connection"));
app.use(express.json());
app.use(require("./router/auth"));
const User = require("./model/userSchema");

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function(_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/public/index.html"),
        function(err) {
            res.status(500).send(err);
        }
    );
});

app.listen(5000, () => {
    console.log("server running on port number 3000");
});