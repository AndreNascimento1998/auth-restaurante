import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
    imports: [
        JwtModule.register({
            secret: 'abcd123456',
            signOptions: {
                expiresIn: '60s'
            }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategyService]
})
export class AuthModule { }
