import { ApiProperty } from '@nestjs/swagger';

export class LoginUsersRequest {
        @ApiProperty({ example: 'Ivan' })
        username: string;

        @ApiProperty({ example: 'Ivan234' })
        password: string;
};

export class LoginUsersResponse {
        @ApiProperty({ example: { user: { userId: 1, username: 'Artur', password: '909234' }}})
        user: {
                userId: number;
                username: string;
                password: string;
        };

        @ApiProperty({ example: 'Logged in' })
        msg: string;
};

export class LogoutUsersResponse {
        @ApiProperty({ example: 'session has ended'})
        msg: string;
};

export class LoginCheckResponse {
        @ApiProperty({ example: 1 })
        userId: number;

        @ApiProperty({ example: 'Ivan' })
        username: string;

        @ApiProperty({ example: 'Ivan234@gmail.com' })
        email: string;
};

export class SignUpResponse {
        @ApiProperty({ example: 1 })
        id: number;

        @ApiProperty({ example: 'Ivan' })
        username: string;

        @ApiProperty({ example: 'Ivan234@gmail.com' })
        email: string;

        @ApiProperty({ example: '$2b$10$lJJtij7GzT4bLVNsBAhqo.aUZASd2LSzgxQ3yC' })
        password: string;

        @ApiProperty({ example: '2024-03-11T23:40:59.337Z' })
        updatedAt: string;

        @ApiProperty({ example: '2024-03-11T23:40:59.337Z' })
        createdAt: string;
};