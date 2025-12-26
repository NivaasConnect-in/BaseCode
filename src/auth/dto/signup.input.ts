import { IsEmail, IsNotEmpty, MinLength, IsOptional, IsDateString, IsEnum, Length } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Gender, Title, UserStatus } from '@prisma/client';

@InputType()
export class SignupInput {
  @Field()
  @ApiProperty()
  @IsEmail()
  email: string;

  @Field()
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field({ nullable: true })
  @ApiProperty({ required: false })
  @IsOptional()
  firstname?: string;

  @Field({ nullable: true })
  @ApiProperty({ required: false })
  @IsOptional()
  lastname?: string;

  @Field({ nullable: true })
  @ApiProperty({ required: false })
  @IsOptional()
  middlename?: string;

  @Field(() => Title, { nullable: true })
  @ApiProperty({ required: false, enum: Title })
  @IsOptional()
  @IsEnum(Title)
  title?: Title;

  @Field({ nullable: true })
  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  dob?: string;

  @Field(() => Gender, { nullable: true })
  @ApiProperty({ required: false, enum: Gender })
  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @Field({ nullable: true })
  @ApiProperty({ required: false })
  @IsOptional()
  @Length(10, 10)
  mobile?: string;

  @Field(() => UserStatus, { nullable: true })
  @ApiProperty({ required: false, enum: UserStatus })
  @IsOptional()
  @IsEnum(UserStatus)
  status?: UserStatus;
}
