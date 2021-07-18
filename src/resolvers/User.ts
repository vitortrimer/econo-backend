import { User } from "../entities/User";
import { MyContext } from "../types";
import { Resolver, Arg, Mutation, InputType, Field, Ctx, ObjectType } from "type-graphql";
import argon2 from "argon2";

@InputType()
class UsernamePasswordInput {

  @Field()
  username: string;

  @Field()
  password: string;

}

@InputType()
class CreateUserInput {

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  document: string;

  @Field()
  name: string;

  @Field()
  lastName: string;

}

@ObjectType()
class FieldError {
  
  @Field()
  field: string;

  @Field()
  message: string;
}


@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {

  @Mutation(() => User)
  async register(
    @Arg('options', () => CreateUserInput) options: CreateUserInput,
    @Ctx() {em}: MyContext
  ) {
    const hashedPassword = await argon2.hash(options.password);

    const user = em.create(User, {
      username: options.username,
      password: hashedPassword,
      name: options.name,
      lastName: options.lastName,
      document: options.document
    });
    await em.persistAndFlush(user);
    return user;

  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('options', () => UsernamePasswordInput) options: UsernamePasswordInput,
    @Ctx() {em}: MyContext
  ): Promise<UserResponse> {

    const user = await em.findOne(User, { username: options.username })

    if(!user) {
      return {
        errors: [{ field: "username", message: "Usuário não encontrado"}]
      };
    }


    const valid = await argon2.verify(user.password, options.password);
    if(!valid) {
      console.log("caiu no valid false")
      return {
        errors: [{ field: "password", message: "Senha incorreta" }]
      };
    }

    return { user };
    
  }

}