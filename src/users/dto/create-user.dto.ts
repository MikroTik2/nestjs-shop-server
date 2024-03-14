import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
        @ApiProperty({ example: 'Ivan' })

        @ApiProperty({ example: 'Ivan123' })
        @IsNotEmpty()
        readonly username: string;

        @ApiProperty({ example: 'Ivan@gmail.com' })
        @IsNotEmpty()
        readonly email: string;

        @IsNotEmpty()
        readonly password: string;
};