import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example:'user@mail.com', description:'Email address'})
    @IsString({message: 'Must be string'})
    @IsEmail({}, {message: 'Not valid email'})
    readonly email: string;

    @ApiProperty({example:'123456', description:'User password'})
    @IsString({message: 'Must be string'})
    @Length(4,16,{message:'min 4 cherecter max 16'})
    readonly password: string;
}