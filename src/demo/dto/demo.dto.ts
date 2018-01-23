import { IsString, IsInt, IsNumber } from 'class-validator';

export class CreateDemoDto {
    @IsString()
    readonly name: string;
    @IsNumber()
    readonly age: number;
    @IsString()
    readonly breed: string;
}