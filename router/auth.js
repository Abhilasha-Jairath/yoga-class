const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

mongoose.set('strictQuery', true);
const DB = 'mongodb+srv://abhi:abhi123@cluster0.jz7lw5x.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,

    useUnifiedTopology: true,

}).then(() => {
    console.log("connection successful");
}).catch((err) => console.log("No connection"));

const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello world from yoga class router`);
});
router.get('/payment', (req, res) => {
    res.send(req.rootUser);
});
router.post('/register', (req, res) => {
    const { name, email, phone, gender, dob, preference } = req.body;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(gender);
    console.log(dob);
    console.log(preference);
    if (!name || !email || !phone || !gender || !dob || !preference) {

        return res.status(422).json("Please fill all required field");
    }

    User.findOne({ email: email }).then((userExist) => {
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }

        const user = new User({ name, email, phone, gender, dob, preference });

        user.save().then(() => {
            res.status(201).json({ message: "user registered succeesfully" });
        }).catch((err) => res.status(500).json({ error: "failed to register" }));
    }).catch(err => { console.log(err); });

    // res.json({message:req.body});
})

module.exports = router;