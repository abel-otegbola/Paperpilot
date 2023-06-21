import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    recommendations: Array,
    papers: Array
}, {
    timestamps: true
})

const Users = models.user || model("user", userSchema);

export default Users;