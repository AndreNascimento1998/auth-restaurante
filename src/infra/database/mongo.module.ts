import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchemas } from 'src/infra/database/schemas/auth.schemas';

const deps = [
    
    MongooseModule.forRoot('mongodb+srv://andrejoarez428:wYl6HfkkVnI3kByh@restaurante-api.pmpxvgn.mongodb.net/restaurante-auth'),
    
    MongooseModule.forFeature([
        { name: 'user', schema: AuthSchemas}
    ])
]

@Module({
    imports: [
        ...deps
    ],
    exports: [
        ...deps
    ]
})
export class MongoModule { }
