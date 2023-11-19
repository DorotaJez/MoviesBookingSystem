import type { Insertable } from 'kysely'
import type { Screenings } from '@/database'

export const screeningRecordFactory = (
  overrides: Partial<Insertable<Screenings>> = {}
): Insertable<Screenings> => ({
  id: 5832,
  timestamp: '2023-11-19 17:29:50',
  ticketsLeft: 5,
  movieId: 2343,
  ...overrides,
})
