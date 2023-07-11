import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchemas } from 'src/infra/database/schemas/auth.schemas';

const deps = [
    MongooseModule.forRootAsync({
        imports: [ConfigModule], 
        useFactory: async (config: ConfigService) => ({
            uri: config.get<string>('MONGO_URI'),
            dbName: config.get('MONGO_DB_NAME')
        }),
        inject: [ConfigService]
    }),

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
