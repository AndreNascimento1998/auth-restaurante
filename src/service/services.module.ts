import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from './auth/jwt-strategy/jwt-strategy.service';
import { JwtGuard } from './jwt.guard';
import RepositoryModule from 'src/repository/repository.module';

const deps = [
    AuthService, JwtStrategyService, JwtGuard
]

@Module({
    imports: [
        JwtModule.register({
            secret: 'abcd123456',
            signOptions: {
                expiresIn: '180s'
            }
        }),

        RepositoryModule
    ],
    providers: [...deps],
    exports: [...deps]
})
export class ServiceModule { }
