import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { User } from 'src/interface/user.interface';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
        private userRepository: UserRepository
    ) { }

    async login(username: string, password: string) {
        const user = await this.validationCredentials(username, password)

        if(typeof user != 'boolean'){
            const payload = {
                email: user.email,
                role: user.role,
            }

            return this.jwtService.sign(payload)
        }

        throw Error('Usuario e senha inválidos')
    }

    async validationCredentials(email: string, password: string): Promise<User|boolean> {
        const userValid = await this.userRepository.fetchUserByEmail(email)
    
        const isValid = bcrypt.compareSync(password, userValid.password)
        if (isValid) {
            return userValid
        }

        return false

    }
}
