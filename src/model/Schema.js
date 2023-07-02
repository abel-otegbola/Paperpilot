import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
}, {
    timestamps: true
})

const recommendationsSchema = new Schema({
    subjects: Array,
    platforms: Array,
    time: Array,
    user: String
}, {
    timestamps: true
})

const Users = models.user || model("user", userSchema);
export const Recommendations = models.recommendation || model("recommendation", recommendationsSchema)

export default Users;