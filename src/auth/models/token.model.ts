import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJWT } from 'graphql-scalars';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class Token {
  @Field(() => GraphQLJWT, { description: 'JWT access token' })
  @ApiProperty()
  accessToken: string;

  @Field(() => GraphQLJWT, { description: 'JWT refresh token' })
  @ApiProperty()
  refreshToken: string;
}
