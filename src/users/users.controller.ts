import { Controller, Request, Body, Post, Get, HttpCode, HttpStatus, Header, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { AuthenicateGuard } from 'src/auth/authenticated.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { LoginCheckResponse, LoginUsersRequest, LoginUsersResponse, LogoutUsersResponse, SignUpResponse } from './types';

@Controller('users')
export class UsersController {
        
        constructor(private readonly usersService: UsersService) {};

        @ApiOkResponse({ type: SignUpResponse })
        @Post('/signup')
        @HttpCode(HttpStatus.CREATED)
        @Header('Content-type', 'application/json')
        
        createdUser(@Body() createUserDto: CreateUserDto) {
                return this.usersService.create(createUserDto);
        };

        @ApiBody({ type: LoginUsersRequest })
        @ApiOkResponse({ type: LoginUsersResponse })
        @Post('/login')
        @UseGuards(LocalAuthGuard)
        @HttpCode(HttpStatus.OK)
        
        login(@Request() req) {
                return { user: req.user, msg: 'Logged in' };
        };

        @ApiOkResponse({ type: LoginCheckResponse })
        @Get('/login-check')
        @UseGuards(AuthenicateGuard)
        
        loginCheck(@Request() req) {
                return req.user;
        };

        @ApiOkResponse({ type: LogoutUsersResponse })
        @Get('/logout')

        logout(@Request() req) {
                req.session.destroy();
                return { msg: 'session has ended' };
        };

};
