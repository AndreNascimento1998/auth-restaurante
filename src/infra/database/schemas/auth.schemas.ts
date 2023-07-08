import { Schema } from "mongoose";

export const AuthSchemas = new Schema({
    email: String,
    password: String,
    role: String
})