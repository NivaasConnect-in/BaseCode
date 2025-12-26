import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class LoginInput {
  @Field()
  @ApiProperty()
  @IsEmail()
  email: string;

  @Field()
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
