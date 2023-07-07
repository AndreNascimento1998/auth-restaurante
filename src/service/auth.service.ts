import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { UserRepository } from 'src/repository/user.repository';

const users = [
    {
        id: 1,
        username: 'andre@gmail.com',
        password: '$2b$10$uB2.EeTjtqS4qqb5w6o5QOsoXURjAe8c2DjAjCQDQ2v5GKdoxvlSu', //123456
        role: 'admin'
    },
    {
        id: 2,
        username: 'sergipe@hotmail.com',
        password: '$2b$10$9VFduCUb6EftmhQbzVFNwOKkQx3jsF6Ul89ttMWUH.NiCQ7pgJcqq',
        role: 'user'
    },
    {
        id: 3,
        username: 'banana@yahoo.com',
        password: '$2b$10$mQnK../gxo1.bBayBRt4EeqzoT0xoczdiYe5JDSMlZglAjj9g.l6e',
        role: 'user'
    },
]

@Injectable()
export class AuthService {
 
    constructor(
        private jwtService: JwtService,
        private userRepository: UserRepository
    ){}

    async login(username: string, password: string) {
        const user = await this.validationCredentials(username, password)

        const payload = {
            sub: user._id,
            email: user.email,
            role: user.role
        }

        return this.jwtService.sign(payload)
    }

    async validationCredentials(email: string, password: string) {
        const userValid = await this.userRepository.fetchUserByEmail(email)
        console.log(userValid)
        try {
            // 1 - remover objeto users
            // 2 - criar repository para users
            // 3 - na repository, criar um método que busca usuário baseado no email
            // 4 - chamar o método que busca user aqui, passando o email informado pelo front
            // 5 - se usuário não estiver no mongo, erro
            // 6 - se usuário estiver, compara a senha conforme linha abaixo
            // 7 - se senha bater, validou!
            // 8 - se senha não bater, erro usuario ou senha inválida 
            const user = userValid.find(user => user.email === email && bcrypt.compareSync(password, user.password))
            return user
        } catch (error) {
            throw new Error('Travou aqui')
        }
    }
}
