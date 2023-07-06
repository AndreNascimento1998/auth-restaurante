import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

const users = [
    {
        id: 1,
        username: 'andre@gmail.com',
        password: '$2b$10$uB2.EeTjtqS4qqb5w6o5QOsoXURjAe8c2DjAjCQDQ2v5GKdoxvlSu' //123456
    },
    {
        id: 2,
        username: 'sergipe@hotmail.com',
        password: '$2b$10$9VFduCUb6EftmhQbzVFNwOKkQx3jsF6Ul89ttMWUH.NiCQ7pgJcqq'
    },
    {
        id: 3,
        username: 'banana@yahoo.com',
        password: '$2b$10$mQnK../gxo1.bBayBRt4EeqzoT0xoczdiYe5JDSMlZglAjj9g.l6e'
    },
]

@Injectable()
export class AuthService {
 
    constructor(
        private jwtService: JwtService
    ){}

    login(username: string, password: string): string{
        const user = this.validationCredentials(username, password)

        const payload = {
            sub: user.id,
            username: user.username,
        }

        return this.jwtService.sign(payload)
    }

    validationCredentials(username: string, password: string) {
        try {
            const user = users.find(user => user.username === username && bcrypt.compareSync(password, user.password))
            return user
        } catch (error) {
            throw new Error('Travou aqui')
        }
    }
}
