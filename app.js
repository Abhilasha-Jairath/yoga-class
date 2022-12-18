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

if (process.env.NODE_ENV === "production") {
    //*Set static folder up in production
    app.use(express.static("client/build"));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

app.listen(5000, () => {
    console.log("server running on port number 3000");
});
