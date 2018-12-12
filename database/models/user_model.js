const mongoose = require("mongoose");
const UserSchema = require("./../schemas/user_schema");

const UserModel = mongoose.mdodel("user", UserSchema);

module.exports = UserModel;