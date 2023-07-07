import { Module } from "@nestjs/common";
import { MongoModule } from "src/infra/database/mongo.module";
import { UserRepository } from "./user.repository";

const deps = [
    UserRepository
]

@Module({
    imports: [MongoModule],
    providers: [...deps],
    exports: [...deps]
})
export default class RepositoryModule{}