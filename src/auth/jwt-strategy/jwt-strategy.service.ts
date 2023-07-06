import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt'){
    constructor(

    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrkey: 'abcd123456'
        })
    }

    async validate(payload) {
        return payload
    }
}
