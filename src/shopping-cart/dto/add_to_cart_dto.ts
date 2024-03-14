import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
import { Is } from "sequelize-typescript";

export class addToCartDto {
        @ApiProperty({ example: 'Artur' })
        @IsNotEmpty()
        readonly username: string;

        @ApiProperty({ example: 1 })
        @IsOptional()
        userId?: number;

        @ApiProperty({ example: 1 })
        @IsNotEmpty()
        readonly partId: number;
};