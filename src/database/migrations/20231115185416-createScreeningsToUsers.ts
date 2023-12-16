import { Kysely, SqliteDatabase } from 'kysely'

export async function up(db: Kysely<SqliteDatabase>) {
  await db.schema
    .createTable('screenings_to_users')
    .ifNotExists()
    .addColumn('screening_id', 'integer', (c) =>
      c.notNull().references('screenings.id')
    )
    .addColumn('users_id', 'integer', (c) => c.notNull().references('users.id'))
    .execute()
}

export async function down(db: Kysely<SqliteDatabase>) {
  await db.schema.dropTable('screenings_to_users').execute()
}
