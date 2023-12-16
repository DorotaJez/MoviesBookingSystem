import type { Insertable, Selectable } from 'kysely'
import type { Screenings, Database, DB } from '@/database'

type Row = Screenings
type RowInsert = Omit<Row, 'id' | 'ticketsLeft'>
// type RowInsert = Insertable<RowWithoutId>;

export default (db: Database) => ({
  getAll: async () =>
    db
      .selectFrom('screenings')
      .innerJoin('movies', 'movies.id', 'screenings.movieId')
      .select([
        'screenings.id',
        'movieId',
        'screeningTimestamp',
        'ticketsAll',
        'ticketsLeft',
        'title',
        'year',
      ])
      .execute(),
  create: async (record: RowInsert) => {
    const result = await db
      .insertInto('screenings')
      .values({
        movieId: record.movieId,
        screeningTimestamp: record.screeningTimestamp,
        ticketsAll: record.ticketsAll,
        ticketsLeft: record.ticketsAll,
      })
      .returningAll()
      .execute()

    return result
  },
})

// const result = await db
//   .selectFrom('person')
//   .innerJoin('pet', 'pet.owner_id', 'person.id')
//   // `select` needs to come after the call to `innerJoin` so
//   // that you can select from the joined table.
//   .select(['person.id', 'pet.name as pet_name'])
//   .execute()
