const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	ft_name: {type: String, required: true},
	lt_name: {type: String, required: true},
	email: {type: String, required: [true, "email is required"]},
	password: {type: String, required: true},
})

module.exports = mongoose.model("User", UserSchema);