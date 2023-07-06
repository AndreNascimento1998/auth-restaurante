import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { JwtGuard } from '../service/jwt.guard';
import { Role } from './role.decorator';
import { RoleGuard } from '../role/role.guard';

@Controller('/login')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post()
    login(@Body() body): object {
        return { token: this.authService.login(body.username, body.password) }
    }

    @Role('admin')
    @UseGuards(JwtGuard, RoleGuard)
    @Get('/test-auth')
    test(@Req() req) {
        console.log(req.user)
        return {name: 'André'}
    }
}
