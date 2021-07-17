import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Bill {

  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: 'text' })
  title: string;

  @Field()
  @Property({ type: 'text', nullable: true })
  description!: string;

  @Field()
  @Property()
  type: string;

  @Field()
  @Property({ type: 'double'})
  value: number;

  @Field()
  @Property()
  status: string;

  @Field(() => String)
  @Property({ type: 'date' })
  expirationDate: Date;

  @Field(() => String)
  @Property({ type: 'date' })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

}