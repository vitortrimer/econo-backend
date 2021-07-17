import { __prod__ } from "./constants";
import { Bill } from "./entities/Bill";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: false
  },
  entities: [User, Bill],
  dbName: 'econosnode',
  user: 'econosnode',
  password: 'econosnode',
  type: 'postgresql',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];