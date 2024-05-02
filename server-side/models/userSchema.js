const mongoose = require('mongoose');
// client side, server-side, database - validations

let userSchema = mongoose.Schema({
    // name: String,
    event_id: {
        type: String,
        required: true,
        allowNull: false
    },
    full_name: {
        type: String,
        required: [true, "Name is mandatory"],
        allowNull: false,
        // defaultValue: "Jack"
    },
    email: {
        type: String,
        required: [true, "Email is mandatory"],
        allowNull: false,
        // unique: true,
    },
    phone_number: {
        type: Number,
        required: [true, "Phone number is mandatory"],
        allowNull: false
    },
    event: {
        type: String,
        required: true,
        allowNull: false,
    }
})


const User = mongoose.model('User', userSchema);

module.exports = User;

