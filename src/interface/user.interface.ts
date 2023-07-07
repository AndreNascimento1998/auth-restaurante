import mongoose from "mongoose";

export interface User extends Document{
    readonly id: mongoose.Schema.Types.ObjectId
    readonly email: String
    readonly password: String
    readonly role: String
}