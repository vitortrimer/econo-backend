"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210717184411 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210717184411 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "bill" ("id" serial primary key, "title" text not null, "description" text null, "type" varchar(255) not null, "value" double precision not null, "status" varchar(255) not null, "expiration_date" timestamptz(0) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
        this.addSql('create table "user" ("id" serial primary key, "username" text not null, "password" text not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
        this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
    }
}
exports.Migration20210717184411 = Migration20210717184411;
//# sourceMappingURL=Migration20210717184411.js.map