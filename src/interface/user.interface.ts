import mongoose from "mongoose";

export interface User extends Document {
    readonly _id: mongoose.Schema.Types.ObjectId
    readonly email: string
    readonly password: string
    readonly role: string
    group: string
}