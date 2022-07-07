import { IsNumber, IsString } from "class-validator";

export class BanUserDto {
    @IsNumber({},{message: 'Must be number'})
    readonly userId: number;
    @IsString({message: 'Must be string'})
    readonly banReason: string;
}