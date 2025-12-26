import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Post } from '../../posts/models/post.model';
import { BaseModel } from '../../common/models/base.model';
import { Role, UserStatus, Gender, Title } from '@prisma/client';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

registerEnumType(UserStatus, {
  name: 'UserStatus',
  description: 'User status',
});

registerEnumType(Gender, {
  name: 'Gender',
  description: 'User gender',
});

registerEnumType(Title, {
  name: 'Title',
  description: 'User title',
});

@ObjectType()
export class User extends BaseModel {
  @Field(() => String, { nullable: true })
  firstname?: string;

  @Field(() => String, { nullable: true })
  middlename?: string;

  @Field(() => String, { nullable: true })
  lastname?: string;

  @Field(() => Title, { nullable: true })
  title?: Title;

  @Field(() => Date, { nullable: true })
  dob?: Date;

  @Field(() => Gender, { nullable: true })
  gender?: Gender;

  @Field(() => String, { nullable: true })
  mobile?: string;

  @Field(() => Boolean)
  isEmailVerified: boolean;

  @Field(() => Boolean)
  isMobileVerified: boolean;

  @Field(() => String)
  preferredLanguage: string;

  @Field(() => UserStatus)
  status: UserStatus;

  @Field(() => Date, { nullable: true })
  lastLoginAt?: Date;

  @Field(() => String, { nullable: true })
  createdBy?: string;

  @Field(() => User, { nullable: true })
  createdByUser?: User;

  @Field(() => [User], { nullable: true })
  createdUsers?: User[];

  @Field(() => Role)
  role: Role;

  @Field(() => [Post], { nullable: true })
  posts?: [Post] | null;

  @HideField()
  passwordHash: string;
}
