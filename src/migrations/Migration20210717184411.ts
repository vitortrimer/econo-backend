import { Migration } from '@mikro-orm/migrations';

export class Migration20210717184411 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "bill" ("id" serial primary key, "title" text not null, "description" text null, "type" varchar(255) not null, "value" double precision not null, "status" varchar(255) not null, "expiration_date" timestamptz(0) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('create table "user" ("id" serial primary key, "username" text not null, "password" text not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
  }

}
