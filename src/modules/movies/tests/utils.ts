import type { Insertable } from 'kysely'
import type { Movies } from '@/database'

export const movieRecordFactory = (
  overrides: Partial<Insertable<Movies>> = {}
): Insertable<Movies> => ({
  id: 1000500100900,
  title: 'A fake movie just for testing',
  year: 1999,
  ...overrides,
})
