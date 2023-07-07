import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/interface/user.interface";

@Injectable()
export class UserRepository {

    constructor(
        @InjectModel('user') private readonly userModel: Model<User>
    ) { }

    async fetchUserByEmail(email: string) {
        const emailUser = await this.userModel.findOne({ email: email })
        if (emailUser) {
            return emailUser
        }

        throw Error('email não encontrado.')
    }
}