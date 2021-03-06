import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity({ tableName: "person" })
export class User {
  
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: "text", unique: true })
  username: string;

  @Field()
  @Property({ type: "text" })
  name: string;

  @Field()
  @Property({ type: "text"})
  lastName: string;

  @Field()
  @Property({ type: "text", unique: true })
  document: string;
  
  @Property({ type: "text" })
  password: string;

  @Field(() => String)
  @Property({ type: 'date' })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

}