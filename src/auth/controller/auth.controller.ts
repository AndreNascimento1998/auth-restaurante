import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Controller('/login')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post()
    login(@Body() body): object {
      return  {token: this.authService.login(body.username, body.password)}
    }
}
