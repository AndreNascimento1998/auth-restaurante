import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ServiceModule } from 'src/service/services.module';

const deps = [
    AuthController
]

@Module({
    imports: [ ServiceModule ],
    controllers: deps,
    providers: deps
})
export class ControllersModule { }
