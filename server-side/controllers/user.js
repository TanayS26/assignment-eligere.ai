const User = require("../models/userSchema");
const { sendEmail } = require("../helper/sendEmail");
const ConfirmationTemplate = require("../template/event-confirmation");


// create a user / register
const createUser = async (req, res, next) => {


    const user = req.body;
    const newUser = new User(user);
    try {
        const eventID = Math.floor(Math.random() * 100000000000);
        newUser.event_id = eventID;
        sendEmail(user.email, ConfirmationTemplate(newUser));
        await newUser.save();
        console.log("User is created", newUser);
        return res.status(201).json({
            message: "User created successfully!",
            result: newUser
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        })
    }
}

module.exports = {
    createUser,
}