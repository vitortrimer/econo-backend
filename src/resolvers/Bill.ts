import { Bill } from "../entities/Bill";
import { MyContext } from "../types";
import { Resolver, Query, Ctx, Arg, Int } from "type-graphql";

@Resolver()
export class BillResolver {

  @Query(() => [Bill])
  bills(@Ctx() { em }: MyContext): Promise<Bill[]> {
    return em.find(Bill, {})
  }

  @Query(() => Bill, {nullable: true})
  bill(
    @Arg('id', () => Int) id: number,
    @Ctx() { em }: MyContext): Promise<Bill | null> {
    return em.findOne(Bill, { id });
  }

}